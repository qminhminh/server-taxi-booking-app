const express = require('express');
const { registerCustomer } = require('../controller/authController');
const authRouter = express.Router();

// sign up users
authRouter.post('/signup-user', registerCustomer);

module.exports = authRouter;