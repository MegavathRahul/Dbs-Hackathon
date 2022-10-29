const exp=require('express')
const productapp=exp.Router()
productapp.use(exp.json())
const expressAsyncHandler=require("express-async-handler")
// productapp.post('/create-product',(request,response)=>{
//     let productobj=request.body
//     let productcollectionobj=request.app.get("productcollectionobj")
//     productcollectionobj.insertOne(productobj,(err,result)=>{
//         if(err)
//         {
//             console.log("error occured while fetching product",err)
//         }
//         else
//         {
//             response.send({message:"product added succesfully"})
//         }
//     })
// })



// productapp.post('/create-product',(request,response)=>{
//     let productobj=request.body
//     let productcollectionobj=request.app.get("productcollectionobj")
//     productcollectionobj.insertOne(productobj)
//     .then(result=>response.send({message:"product added successfully"}))
//     .catch(err=>console.log("error occured",err))
// })

productapp.post('/create-product',expressAsyncHandler(async(request,response)=>{
    let productobj=request.body
    let productcollectionobj=request.app.get("productcollectionobj")
    let result=await productcollectionobj.insertone(productobj)
    response.send({message:"product added successfully"})
}))


productapp.get("/getproduct",expressAsyncHandler(async(request,response)=>{
    let productcollectionobj=request.app.get("productcollectionobj")
    let products=await productcollectionobj.find().toArray()
    response.send({message:"products are",payload:products})
}))


productapp.get("/product/:id",expressAsyncHandler(async(request,response)=>{
    let productId=(+request.params.id)
    let productcollectionobj=request.app.get("productcollectionobj")
    let product= await productcollectionobj.findOne({productId:productId})
    if(product==null)
    {
        response.send({message:"product does not exist"})
    }
    else
    {
        response.send({message:"product with given id is",payload:product})
    }
}))


productapp.put("/update-product",expressAsyncHandler(async(request,response)=>{
    let produpdate=request.body
    let productcollectionobj=request.app.get("productcollectionobj")
    await productcollectionobj.updateOne({productId:produpdate.productId},{$set:{...produpdate}})
    response.send({message:"updated product list"})

}))


productapp.delete("/delete-product/:id",expressAsyncHandler(async(request,response)=>{
    let pId=(+request.params.id)
    let productcollectionobj=request.app.get("productcollectionobj")
    await productcollectionobj.deleteOne({productId:pId})
    response.send({message:"product deleted sucessfully"})
}))
module.exports=productapp;