const express = require('express');
const router = express.Router();

const StatisticsController = require('../app/controllers/StatisticsController');

router.get('/',async(req,res,next)=>{
    try{
        return res.status(200).json({
            message:"This is statistics route",

        });
    }   catch(err){
        next(err);
    }
})

router.post('/cancel-rate',async(req,res,next)=>{
    try{
        const {seller_id,from,to}=req.body;
        const data = await StatisticsController.cancelrate({seller_id,from,to});
        if (data.error) {
            return res.status(400).json(data);
          } else return res.status(200).json(data);

    }   catch(err){
        next(err);
    }
})

router.post('/total-order',async(req,res,next)=>{
    try{
        const {seller_id,from,to}=req.body;
        const data = await StatisticsController.totalorder({seller_id,from,to});
        if (data.error) {
            return res.status(400).json(data);
          } else return res.status(200).json(data);

    }   catch(err){
        next(err);
    }
})

router.post('/total-canceled',async(req,res,next)=>{
    try{
        const {seller_id,from,to}=req.body;
        const data = await StatisticsController.totalcanceled({seller_id,from,to});
        if (data.error) {
            return res.status(400).json(data);
          } else return res.status(200).json(data);

    }   catch(err){
        next(err);
    }
})

router.post('/revenue',async(req,res,next)=>{
    try{
        const {seller_id,from,to}=req.body;
        const data = await StatisticsController.revenue({seller_id,from,to});
        if (data.error) {
            return res.status(400).json(data);
          } else return res.status(200).json(data);

    }   catch(err){
        next(err);
    }
})

router.post('/total-order/status',async(req,res,next)=>{
    try{
        const {seller_id,from,to}=req.body;
        const data = await StatisticsController.totalorderstatus({seller_id,from,to});
        if (data.error) {
            return res.status(400).json(data);
          } else return res.status(200).json(data);

    }   catch(err){
        next(err);
    }
})

module.exports = router;