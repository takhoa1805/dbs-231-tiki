const express = require('express');
const router = express.Router();

const CartController = require('../app/controllers/CartController');


router.get('/',async(req,res,next)=>{
    try{
        return res.status(200).json({
            message:"This is cart  route"
        });
    }   catch(err){
        next(err);
    }
});

router.get('/user/:user_id',async(req,res,next)=>{
    const user_id = req.params.user_id;
    try{
        const data = await CartController.getcart(user_id);
        if (data.error) {
            return res.status(400).json(data);
          } else return res.status(200).json(data);

    }   catch(err){
        next(err);
    }
});


router.post('/add',async(req,res,next)=>{
    const {product_id,quantity,user_id}=req.body;
    try{
        const data = await CartController.addproduct({product_id,quantity,user_id});
        if (data.error) {
            return res.status(400).json(data);
          } else return res.status(200).json(data);

    }   catch(err){
        next(err);
    }
})

router.post('/remove',async(req,res,next)=>{
    const {product_id,user_id}=req.body;
    try{
        const data = await CartController.removeproduct({product_id,user_id});
        if (data.error) {
            return res.status(400).json(data);
          } else return res.status(200).json(data);

    }   catch(err){
        next(err);
    }
})


module.exports = router;