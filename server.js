const http = require('http');

const port = process.env.PORT || 3000;
const app = require('./app');
const productRoutes = require('./routes/product');
const orderRoutes= require('./routes/order');

const server = http.createServer();
app.use('/products',productRoutes);
app.use('/order',orderRoutes);

server.listen(port);