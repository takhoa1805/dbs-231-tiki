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
            return {result:products.recordset};
        }   catch(err){
            throw err;
        }
    }

    async createproduct(input){
        try{
            const {_id,price,description,name,origin,quantity,type,brand_id,relative_list,sample_product,seller_id}=input;
            let pool = await sql.connect(config);
            console.log(input);

            let result = await pool.request().query(`INSERT INTO SanPham (MaSP,GiaTien,MoTa,TenSP,XuatXu,SoLuongConLai,LoaiSP,MaThuongHieu,DanhSachLienQuan,SPMau,MaNguoiBan) 
                                                    VALUES ('${_id}','${price}','${description}','${name}','${origin}','${quantity}','${type}','${brand_id}','${relative_list}','${sample_product}','${seller_id}')`);
            
            return (result);
        }catch(err){
            throw err;
        }
    }
}

module.exports = new ProductController();