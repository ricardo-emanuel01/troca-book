const express = require('express');
const AuthController  = require('./controllers/AuthController')
const routes = express();

const authControllerInstance = new AuthController();

routes.get('/health',(req,res)=>{
   res.json({
    "message":"Ok"
   }).status(200)
})
routes.post('/signup', authControllerInstance.signup);

module.exports = routes;