const express = require('express');
const { fetchDriver, fetchCustomer } = require('../controller/adminController');
const admin = require('../middlewares/admin');
const adminRouter = express.Router();

// get all drivers
adminRouter.get('/fetchdrivers',admin, fetchDriver);

// get all customer 
adminRouter.get('/fetchcustomer',admin, fetchCustomer);

module.exports = adminRouter;