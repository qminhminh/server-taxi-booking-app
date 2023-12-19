const express = require('express');
const { registerCustomer, registerDrivers, loginCutomer, loginDrivers } = require('../controller/authController');
const authRouter = express.Router();
//=====================* Customer *===================
// sign up users
authRouter.post('/signup-user', registerCustomer);

// login customers
authRouter.post('/signin-user', loginCutomer);


module.exports = authRouter;