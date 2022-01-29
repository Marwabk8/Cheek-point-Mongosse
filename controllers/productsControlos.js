const Product = require('../models/Product');

exports.addProduct=async(req,res)=>{
    let {brands,reference,price}=req.body
    price=Number(price)
    reference=Number(reference)
    try {
        const product=new Product({
            brands,
            reference,
            price
    
        })
     
     await product.save()
     res.send({message:"product added",product})
    }  catch (error) {
        res.status(500).send("server error")
    }
}

exports.getproducts=async(req,res)=>{
    try {
        const products= await Product.find()
        res.send(products)
    } 
    catch (error) {
        res.status(500).send("server error")
    }
    
    }

    exports.deleteproduct=async(req, res) =>
    { const {productId}= req.params;
    try { 
        await Product.findByIdAndDelete(productId);
        res.send ("product deleted")
        
    } catch (error) {
        res.status(500).send("server error")
      
    }
    
    }

    exports.updateproduct =async(req,res)=>
    {const {productId} = req.params;
    try {
        const product= await Product.findByIdAndUpdate(productId,{$set:{...req.body}});
        res.send({message:"product update",product});
        
    } catch (error) {
        res.status(500).send("server error");
        
    }
    
    }

    exports.getOneProduct=async(req,res)=>{
        const {productId}= req.params
        try {
            const product= await Product.findById(product)
            res.send(product)
    
             
        } catch (error) {
            res.status(500).send("server error")  
            
        }
    
    }