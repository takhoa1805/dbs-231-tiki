const CartRouter = require('./cart-route');
const OrderRouter = require('./order-route');
const ProductRouter = require('./product-route');
const StatisticsRouter = require('./statistics-route');

module.exports ={
    cart: CartRouter,
    order:OrderRouter,
    product:ProductRouter,
    statistics:StatisticsRouter,
};