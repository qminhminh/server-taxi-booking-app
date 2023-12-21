const express = require('express');
const { fetchDriver, fetchCustomer } = require('../controller/adminController');
const admin = require('../middlewares/admin');
const adminRouter = express.Router();

adminRouter.get('/fetchdrivers',admin, fetchDriver);
adminRouter.get('/fetchcustomer',admin, fetchCustomer);

module.exports = adminRouter;