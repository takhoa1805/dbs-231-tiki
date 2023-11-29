const tedious = require('tedious');

const config = {
    server: 'localhost',
    authentication: {
        type: 'default',
        options: {
            userName: 'dbuser',
            password: 's3kreee7'
        }
    },
    options: {
        database: 'my_db',
        encrypt: true
    }
}

module.exports = async()=>{
    const connection = new tedious.Connection(config)
    connection.on('connect', (err) => {
        if (err) {
            console.error(err.message)
        } else {
            console.log('Connected to SQL Server')
        }
    })
}