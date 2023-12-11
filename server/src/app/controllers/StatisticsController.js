const sql = require('mssql');
const config = require('../../config/index');
const { json } = require('body-parser');

class StatisticsController{
    async cancelrate(input){
        const {seller_id,from,to}=input;
        // console.log(input);
        try{
            let pool = await sql.connect(config);
            let result = await pool.request().query(`SELECT dbo.cancel_order_rate('${from}', '${to}', '${seller_id}') AS CancelRate;
            `);
            return {result:result.recordset[0]};
        }   catch(err){
            throw err;
        }
    }

    async totalorder(input){
        const {seller_id,from,to}=input;
        // console.log(input);
        try{
            let pool = await sql.connect(config);
            let result = await pool.request().query(`SELECT dbo.total_order('${from}', '${to}', '${seller_id}') AS TotalOrder;
            `);
            return {result:result.recordset[0]};
        }   catch(err){
            throw err;
        }
    }

    async totalcanceled(input){
        const {seller_id,from,to}=input;
        console.log(input);
        try{
            let pool = await sql.connect(config);
            let result = await pool.request().query(`SELECT dbo.total_canceled_order('${from}', '${to}', '${seller_id}') AS TotalCanceled;
            `);
            return {result:result.recordset[0]};
        }   catch(err){
            throw err;
        }
    }

    async revenue(input){
        const {seller_id,from,to}=input;
        console.log(input);
        try{
            let pool = await sql.connect(config);
            let result = await pool.request().query(`SELECT dbo.revenue_statistics('${from}', '${to}', '${seller_id}') AS Revenue;
            `);
            return {result:result.recordset[0]};
        }   catch(err){
            throw err;
        }
    }

    async totalorderstatus(input){
        const {seller_id,from,to}=input;
        console.log(input);
        try{
            let pool = await sql.connect(config);
            let result = await pool.request().query(`SELECT * FROM dbo.total_order_status('${from}', '${to}', '${seller_id}');
            `);
            return {result:result.recordset[0]};
        }   catch(err){
            throw err;
        }
    }

}

module.exports = new StatisticsController();