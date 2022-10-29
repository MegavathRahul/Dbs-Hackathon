const exp=require('express')
const userapp=exp.Router()
const expressAsynchandler=require("express-async-handler")
const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken")
userapp.use(exp.json())
const verifytoken=require('./middlewares/Verifytoken')
userapp.get("/getusers",verifytoken,expressAsynchandler(async(request,response)=>{
    let usercollectionobj=request.app.get("usercollectionobj")
    let users=await usercollectionobj.find().toArray()
    response.send({message:"users list",payload:users})
}))



userapp.post("/create-user",expressAsynchandler(async(request,response)=>{
   let newuser=request.body
   let usercollectionobj=request.app.get("usercollectionobj")
   let userobj=await usercollectionobj.findOne({username:newuser.username})
   if(userobj!==null)
   {
       response.send({message:"username already exists"})
   }
   else
   {
       let bcryptpassword=await bcrypt.hash(newuser.password,6)
       newuser.password=bcryptpassword 
       await usercollectionobj.insertOne(newuser)
       response.send({message:"user created sucessfully"})
   }
}))



userapp.post("/login",expressAsynchandler(async(request,response)=>{
    let usercollectionobj=request.app.get("usercollectionobj")
    let userobj=request.body
    let searchuser=await usercollectionobj.findOne({username:userobj.username})
    if(searchuser==null)
    {
        response.send({message:"invalid username"})
    }
    else
    {
        let status=await bcrypt.compare(userobj.password,searchuser.password)
        if(status==false)
        {
            response.send({message:"invalid password"})
        }
        else
        {
            let token=jwt.sign({username:userobj.username},process.env.SEQURITY_KEY,{expiresIn:60})
            response.send({message:"login sucessfull",payload:token,userobj:userobj})
        }
    }
}))




userapp.put("/update-user",expressAsynchandler(async(request,response)=>{
    let usercollectionobj=request.app.get("usercollectionobj")
    let updateuser=request.body
    await usercollectionobj.updateOne({username:updateuser.username},{$set:{...updateuser}})
    response.send({message:"updated user details"})

}))



userapp.delete("/delete-user/:username",expressAsynchandler(async(request,response)=>{
    let usercollectionobj=request.app.get("usercollectionobj")
    let deleteusername=request.params.username
    await usercollectionobj.deleteOne({username:deleteusername})
    response.send({message:"deleted user succesfully"})
}))
module.exports=userapp;