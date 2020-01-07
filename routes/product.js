const express = require('express');
const router = express.Router();


router.get('/product',(req,res,next)=>{
    res.status(200).json({
        message:"handling get request to /products"
    });
});

router.post('/',(req,res,next)=>{
    res.status(200).json({
        message:"Handling post request to /products"
    });
});

router.get('/:productId',(req,res,next)=>{
    const id=req.params.productId;
    if(id=="special"){        
    res.status(200).json({
        message: "You have discovered special id"
        
    });
}
else{
    res.status(200).json({
        message: 'You passed an id'
    })
}
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
