const express = require('express');
const router = express.Router();
const mongoose=require('mongoose');
const Product=require('../models/products');

router.get('/produc',(req,res,next)=>{
    res.status(200).json({
        message:"handling get request to /products"
    });
});

router.post('/',(req,res,next)=>{
    const product = new Product({
        _id:new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price
    });
    product.save().then(result=>{
        console.log(result);
    }).catch(err=>console.log(err));
    res.status(201).json({
        message:"Handling post request to /products",
        product: product
    });
});

router.get('/:productId',(req,res,next)=>{
    const id=req.params.productId;
    Product.findById(id)
    .exec()
    .then(doc=>{
        console.log(doc);
        res.status(200).json(doc);
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});

router.patch('/:productId',(req,res,next)=>{
    res.status(200).json({
        message:"Updated the product"
    });
});

router.delete('/',(req,res,next)=>{
    res.status(200).json({
        message:"Delete the product"
    });
});


module.exports = router;
