const express = require('express');
const router = express.Router();

const ProductController = require('../app/controllers/ProductController');

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

router.post('/create',async(req,res,next)=>{
    try{
        const {_id,price,description,name,origin,quantity,type,brand_id,relative_list,sample_product,seller_id}=req.body;
        const data = await ProductController.createproduct( {_id,price,description,name,origin,quantity,type,brand_id,relative_list,sample_product,seller_id});

        if (data.error) {
            return res.status(400).json(data);
          } else return res.status(200).json(data);

    }   catch(err){
        next(err);
    }
})

module.exports = router;