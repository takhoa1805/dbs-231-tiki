const sql = require('mssql');
const config = require('../../config/index');
const { json } = require('body-parser');

class ProductController{
    async getallproducts(){
        try{
            let pool = await sql.connect(config);
            let products = await pool.request().query('SELECT * FROM SanPham');
            return {result:products.recordset};
        }   catch(err){
            throw err;
        }
    }

    async getproductbyid(product_id){
        try{
            let pool = await sql.connect(config);
            let products = await pool.request().query(`SELECT * FROM SanPham WHERE MaSP = ${product_id}`);
            return {result:products.recordset[0]};
        }   catch(err){
            throw err;
        }
    }

    async createproduct(input){
        try{
            const {_id,price,description,name,origin,quantity,type,brand_id,relative_list,sample_product,seller_id}=input;
            let pool = await sql.connect(config);

            let result = await pool.request().query(`INSERT INTO SanPham (MaSP,GiaTien,MoTa,TenSP,XuatXu,SoLuongConLai,LoaiSP,MaThuongHieu,DanhSachLienQuan,SPMau,MaNguoiBan) 
                                                    VALUES ('${_id}','${price}','${description}','${name}','${origin}','${quantity}','${type}','${brand_id}','${relative_list}','${sample_product}','${seller_id}')`);
            
            return {result:result.rowsAffected + ` rows affected`}


        }catch(err){
            throw err;
        }
    }

    async getproductbyname(product_name){
        try{
            let pool = await sql.connect(config);

            let products = await pool.request().query(`SELECT * FROM SanPham WHERE TenSP LIKE '%${product_name}%'`);
            
            return {result:products.recordset};


        }   catch(err){
            throw err;
        }
    }

    async deleteproduct(product_id){
        try{
            let pool = await sql.connect(config);

            let result = await pool.request().query(`DELETE FROM SanPham WHERE MaSP = ${product_id}`);

            return {result:result.rowsAffected + ` rows affected`}

        }   catch (err){
            throw err;
        }

    }

    async updateproduct(input){
        try{
            const {_id,price,description,name,origin,quantity,type,brand_id,relative_list,sample_product,seller_id}=input;
            let pool = await sql.connect(config);

            let result = await pool.request().query(`UPDATE SanPham SET GiaTien = '${price}',MoTa='${description}',TenSP='${name}',XuatXu='${origin}',SoLuongConLai='${quantity}',LoaiSP='${type}',MaThuongHieu='${brand_id}',DanhSachLienQuan='${relative_list}',SPMau='${sample_product}',MaNguoiBan='${seller_id}'
                                                     WHERE MaSP =${_id}`);
            
            return {result:result.rowsAffected + ` rows affected`}

        }catch(err){
            throw err;
        }
    }

    
    async getrating(product_id,sortby){
        try{
            let pool = await sql.connect(config);

            let product = await pool.request().query(`EXEC GetRating @ID = ${product_id}, @sortBy = ${sortby}`);

            return {result:product.recordsets[0]};
        }   catch(err){
            throw err;
        }    
    }

}

module.exports = new ProductController();