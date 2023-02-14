const express = require('express');
const route = express.Router();
const {authToken}= require('./app/middlewares')

route.post('/posts',authToken, (req,res)=>{
    res.json({
        posts:
        {
            title: 'my first post',
            description: 'random data you should not access'
        }
    })
})

module.exports=route;