const sql = require('mssql');
const config = {
    user:'khoa', //update me
    password:'6319', //update me
    database:'tikitiki', //update me
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


module.exports = config;


