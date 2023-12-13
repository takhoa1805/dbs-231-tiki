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

            
            let result = await pool.request().query(`EXEC Insert_SanPham '${_id}', ${price}, N'${description}', 
                                                    N'${name}', N'${origin}', ${quantity}, '${type}', '${brand_id}',
                                                    ${relative_list}, ${sample_product}, '${seller_id}', null;`);

            return {result:result.rowsAffected + ` rows affected`}


        }catch(err){
            console.log(err)
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

    async getBrand(){
        try{
            let pool = await sql.connect(config);

            let products = await pool.request().query(`SELECT * FROM ThuongHieu`);
            
            return {result:products.recordset};


        }   catch(err){
            throw err;
        }
    }

    async deleteproduct(product_id){
        try{
            let pool = await sql.connect(config);

            let result = await pool.request().query(`EXEC Delete_SanPham '${product_id}';`);

            return {result:result.rowsAffected + ` rows affected`}

        }   catch (err){
            throw err;
        }

    }

    async updateproduct(input){
        try{
            const {_id,price,description,quantity}=input;
            let pool = await sql.connect(config);

            let result = await pool.request().query(`EXEC Update_SanPham '${_id}', ${price}, N'${description}', ${quantity};`);
            
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