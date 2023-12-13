const sql = require('mssql');
const config = {
    user:'sa', //update me
    password:'123456789', //update me
    database:'tiki', //update me
    server: 'localhost',  //update me
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


