const express = require('express');
const { registerCustomer,loginCutomer } = require('../controller/authController');
const authRouter = express.Router();
//=====================* Customer *===================
// sign up users
authRouter.post('/signup-user', registerCustomer);

// login customers
authRouter.post('/signin-user', loginCutomer);


module.exports = authRouter;