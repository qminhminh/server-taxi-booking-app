const express = require('express');
const { registerCustomer, registerDrivers, loginCutomer, loginDrivers } = require('../controller/authController');
const authRouter = express.Router();
//=====================* Customer *===================
// sign up users
authRouter.post('/signup-user', registerCustomer);

// login customers
authRouter.post('/signin-user', loginCutomer);

// ===================* Driver *==========================
// sign up drivers
authRouter.post('/signup-drivers', registerDrivers);

// login drivers
authRouter.post('/signin-drivers', loginDrivers);

module.exports = authRouter;