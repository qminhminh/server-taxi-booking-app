const express = require('express');
const { registerCustomer, registerDrivers } = require('../controller/authController');
const authRouter = express.Router();

// sign up users
authRouter.post('/signup-user', registerCustomer);

// sign up drivers
authRouter.post('/signup-drivers', registerDrivers);

module.exports = authRouter;