const sql = require('mssql');
const config = {
    user:'khoa', //update me
    password:'6319', //update me
    database:'tiki', //update me
    server: 'KHOALAPTOP\\SQLEXPRESS',  //update me
    pool:{
        max:10,
        min:0,
        idleTimeoutMillis:30000
    },
    options:{
        trustServerCertificate:true
    }
}

// const connection = async()=>{
//     try{
//         const promise = await sql.connect(config);
//         const result = await sql.query('SELECT * FROM SanPham');
//         console.log(result);
//     }   catch(err){
//         console.log(err);
//     }
// }

// connection();

module.exports = config;


