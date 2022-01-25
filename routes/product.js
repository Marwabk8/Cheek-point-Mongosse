const express= require('express')
const req = require('express/lib/request')
const res = require('express/lib/response');
const { getproducts, deleteproduct, updateproduct, getOneProduct, addProduct } = require('../controllers/productsControlos');

const router=express.Router()

router.get("/test",(req,res)=>{
res.send("bonjour marwa");

});

router.post('/',addProduct)




router.get('/',getproducts);

router.delete('/:productId',deleteproduct)

router.put('/:productId',updateproduct)

router.get('/:productId',getOneProduct)



module.exports=router;