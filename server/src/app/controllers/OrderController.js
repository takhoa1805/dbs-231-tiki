const sql = require('mssql');
const config = require('../../config/index');
const { json } = require('body-parser');

class OrderController{
    async getallorders(){
        try{
            let pool = await sql.connect(config);
            let products = await pool.request().query('SELECT * FROM DonHang');
            return {result:products.recordset};
        }   catch(err){
            throw err;
        }
    }

    async getorderdetails(order_id){
        try{
            let pool = await sql.connect(config);
            let orders = await pool.request().query(`EXEC GetOrderDetails @MaDonHang = ${order_id}`);

            return {result:orders.recordsets};
        }   catch(err){
            throw err;
        }    
    }


}

module.exports = new OrderController();