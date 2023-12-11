const express = require('express');
const router = express.Router();

const OrderController = require('../app/controllers/OrderController');

router.get('/',async(req,res,next)=>{
    try{
        return res.status(200).json({
            message:"This is order route"
        });
    }   catch(err){
        next(err);
    }
});

router.get('/all',async(req,res,next)=>{
    try{
        const data = await OrderController.getallorders();
        if (data.error) {
            return res.status(400).json(data);
          } else return res.status(200).json(data);

    }   catch(err){
        next(err);
    }
});

router.get('/detail/:order_id',async(req,res,next)=>{
    try{
        const data = await OrderController.getorderdetails(req.params.order_id);
        if (data.error) {
            return res.status(400).json(data);
          } else return res.status(200).json(data);

    }   catch(err){
        next(err);
    }
});


module.exports = router;