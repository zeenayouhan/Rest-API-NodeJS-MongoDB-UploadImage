const express = require('express');
const app = express(); 
const morgan = require('morgan');
const mongoose=require('mongoose');

const productRoutes = require('./routes/product');
const orderRoutes= require('./routes/order');
const bodyParser= require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

mongoose.connect("mongodb://nodejs-image-upload:"+process.env.MONGO_ATLAS_PW+"@nodejs-image-upload-fglj0.mongodb.net/test?retryWrites=true&w=majority",{
    
    useUnifiedTopology: true,
    useNewUrlParser: true
})


app.use(morgan('dev'));
app.use('/product',productRoutes);
app.use('/order',orderRoutes);


app.use((req,res,next)=>{
    const error = new Error('not found');
    error.status = 404;
    next(error);
});

app.use((error,req,res,next)=>{
    res.status(500 );
    res.json({
        error:{
            message: error.message
        }
    })
})

module.exports= app;