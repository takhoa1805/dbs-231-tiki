const express = require('express');
const router = express.Router();

const ProductController = require('../app/controllers/ProductController');

let id = 10002100;

router.get('/',async(req,res,next)=>{
    try{
        return res.status(200).json({
            message:"This is product route"
        });
    }   catch(err){
        next(err);
    }
})

router.get('/all',async(req,res,next)=>{
    try{
        const data = await ProductController.getallproducts();
        if (data.error) {
            return res.status(400).json(data);
          } else return res.status(200).json(data);

    }   catch(err){
        next(err);
    }
})

router.get('/findbyid/:id',async(req,res,next)=>{   
    try{    
        const data = await ProductController.getproductbyid(req.params.id);

        if (data.error) {
            return res.status(400).json(data);
          } else return res.status(200).json(data);

    }   catch(err){
        next(err);
    }
})


router.get('/brand', async(req,res,next)=>{
    try{
        const data = await ProductController.getBrand();
        console.log(data)
        if (data.error) {
            return res.status(400).json(data);
          } else return res.status(200).json(data);

    }   catch(err){
        next(err);
    }
})

router.post('/create',async(req,res,next)=>{
    try{
        const {price,description,name,origin,quantity,type,brand_id,relative_list,sample_product,seller_id}=req.body;
        const _id = id++;
        const data = await ProductController.createproduct( {_id,price,description,name,origin,quantity,type,brand_id,relative_list,sample_product,seller_id});

        if (data.error) {
            return res.status(400).json(data);
          } else return res.status(200).json(data);

    }   catch(err){
        next(err);
    }
})

router.get('/name/:product_name',async(req,res,next)=>{
    try{
        const data = await ProductController.getproductbyname(req.params.product_name);
        if (data.error){
            return res.status(400).json(data);
        }   else return res.status(200).json(data);
    }   catch(err){
        next(err);
    }
})

router.post('/update',async (req,res,next)=>{
    try{
        const {_id,price,description,quantity}=req.body;
        const data = await ProductController.updateproduct( {_id,price,description,quantity});

        if (data.error) {
            return res.status(400).json(data);
          } else return res.status(200).json(data);

    }   catch (err){
        next(err);
    }
})

router.post('/delete/:id',async(req,res,next)=>{
    try{
        const data = await ProductController.deleteproduct(req.params.id);
        if (data.error){
            return res.status(400).json(data);
        }   else return res.status(200).json(data);
    }   catch(err){
        next(err);
    }
})

router.get('/rating/date/ascending/:product_id',async(req,res,next)=>{
    try{
        const data = await ProductController.getrating(req.params.product_id,'date_asc');
        if (data.error){
            return res.status(400).json(data);
        }   else return res.status(200).json(data);
    }   catch(err){
        next(err);
    }
})

router.get('/rating/date/descending/:product_id',async(req,res,next)=>{
    try{
        const data = await ProductController.getrating(req.params.product_id,'date_desc');
        if (data.error){
            return res.status(400).json(data);
        }   else return res.status(200).json(data);
    }   catch(err){
        next(err);
    }
})

router.get('/rating/rates/ascending/:product_id',async(req,res,next)=>{
    try{
        const data = await ProductController.getrating(req.params.product_id,'rating_asc');
        if (data.error){
            return res.status(400).json(data);
        }   else return res.status(200).json(data);
    }   catch(err){
        next(err);
    }
});

router.get('/rating/rates/descending/:product_id',async(req,res,next)=>{
    try{
        const data = await ProductController.getrating(req.params.product_id,'rating_desc');
        if (data.error){
            return res.status(400).json(data);
        }   else return res.status(200).json(data);
    }   catch(err){
        next(err);
    }
})

module.exports = router;