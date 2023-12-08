const express = require('express');
const router = express.Router();

router.get('/',async(req,res,next)=>{
    try{
        return res.status(200).json({
            message:"This is order route"
        });
    }   catch(err){
        next(err);
    }
})

module.exports = router;