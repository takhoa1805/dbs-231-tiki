const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');


const {cart,order,product,statistics}=require('./routes');


module.exports = async(app)=>{
    app.use(express.json());
    app.use(morgan('dev'));
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    app.use(
        cors({
          origin: 'http://localhost:5173',
          methods: 'GET,POST,PUT,DELETE',
          credentials: true,
        }),
    );

    app.use('/cart',cart);
    app.use('/order',order);
    app.use('/product',product);
    app.use('/statistics',statistics);


    app.use((req, res, next) => {
        const error = new Error('Not found');
        error.status = 404;
        next(error);
      });
    
      app.use((error, req, res, next) => {
        res.status(error.status || 500);
        res.json({
          error: {
            message:
              'Errors happen, status code: ' +
              (error.status || 500) +
              ' message: ' +
              error.message,
          },
        });
      });
}