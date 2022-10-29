const jwt=require('jsonwebtoken')
require('dotenv').config()
const verifytoken=(request,response,next)=>{
    let bearerToken = request.headers.authorization;
    if(bearerToken==undefined)
    {
        response.send({ message: "unauthorized access" })
    }
    let token=bearerToken.split(" ")[1]
    try{
        jwt.verify(token,process.env.SEQURITY_KEY)
        next()
    }
    catch(err)
    {
        response.send({ message: "Session expired..Relogin to continue" })
    }
    
}
module.exports=verifytoken;
