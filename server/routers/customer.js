const express = require('express');
const { updateDeviceToken } = require('../controller/customerController');
const customerRouter = express.Router();

// update token in customer 
customerRouter.put('/update-tokendevice/customer', updateDeviceToken);

module.exports = customerRouter;