const express = require('express');
const listBooks = require('./controller/listBooks.js');
const AuthController = require('./controller/authController.js');

const authController = new AuthController()
const routes = express();

routes.get('/health',(req,res)=>{
    res.json({
        "message":"OK"
    }).status(200);
})
routes.get('/books', listBooks);
routes.post('/signup',authController.signup)
module.exports = routes;