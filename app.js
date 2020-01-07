const express = require('express');
const app = express(); 

app.use((req,res,err)=>{
    res.status(202).json({
        message: "It works",

    });
});

module.exports= app;