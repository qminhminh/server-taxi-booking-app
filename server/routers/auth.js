const express = require('express');
const { registerCustomer, registerDrivers, loginCutomer } = require('../controller/authController');
const authRouter = express.Router();

// sign up users
authRouter.post('/signup-user', registerCustomer);

authRouter.post('/signin-user', loginCutomer);

// sign up drivers
authRouter.post('/signup-drivers', registerDrivers);

module.exports = authRouter;