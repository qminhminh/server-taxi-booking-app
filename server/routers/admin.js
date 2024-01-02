const express = require('express');
const { fetchDriver, fetchCustomer, fetchTRipRequest, updateBlockDriver, updateBlockCustomer, updateUnBlockDriver, updateUnBlockCustomer } = require('../controller/adminController');
const admin = require('../middlewares/admin');
const adminRouter = express.Router();

// get all drivers
adminRouter.get('/fetchdrivers',admin, fetchDriver);

// get all customer 
adminRouter.get('/fetchcustomer',admin, fetchCustomer);

// get all trip reuquest  
adminRouter.get('/fetchtriprequest',admin, fetchTRipRequest);

// update block status driver
adminRouter.put('/update-block-status/driver',admin, updateBlockDriver);

// update block status driver
adminRouter.put('/update-block-status/customer',admin, updateBlockCustomer);

// update block status cusomer
adminRouter.put('/update-un-block-status/driver',admin, updateUnBlockDriver);

// update un block status driver
adminRouter.put('/update-un-block-status/customer',admin, updateUnBlockCustomer);

module.exports = adminRouter;