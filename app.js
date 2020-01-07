const express = require('express');
const app = express(); 

const productRoutes = require('./routes/product');
const orderRoutes= require('./routes/order');
app.use('/product',productRoutes);
app.use('/order',orderRoutes);
app.use((req,res,err)=>{
    res.status(202).json({
        message: "It works",

    });
});

module.exports= app;