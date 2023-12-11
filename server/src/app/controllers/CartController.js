const sql = require('mssql');
const config = require('../../config/index');
const { json } = require('body-parser');

class CartController{
    async getcart(user_id){
        try{
            let pool = await sql.connect(config);
            let cart = await pool.request().query(`EXEC GetCartDetails @MaNguoiMua = ${user_id}`);

            return {result:cart.recordsets[1]};
        }   catch(err){
            throw err;
        }   
    }

    async addproduct(input){
        const {product_id,quantity,user_id}=input;   
        try{
            let pool = await sql.connect(config);

            let result = await pool.request().query(`INSERT INTO DanhSachSPThuocGioHang (MaSP,MaNguoiMua,SoLuong) 
                                                    VALUES ('${product_id}','${user_id}','${quantity}')`);
            
            return {result:result.rowsAffected + ` rows affected`}


        }   catch(err){
            throw err;
        }   

    }   

    async removeproduct(input){
        const {product_id,user_id}=input;   
        try{
            let pool = await sql.connect(config);

            let result = await pool.request().query(`DELETE FROM DanhSachSPThuocGioHang WHERE (MaSP = '${product_id}' AND MaNguoiMua = '${user_id}')`);

            return {result:result.rowsAffected + ` rows affected`}


        }   catch(err){
            throw err;
        }   
    }
}

module.exports = new CartController();