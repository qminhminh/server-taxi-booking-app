const express = require('express');
const { updateDeviceToken, getInfoDriverInTripRequest } = require('../controller/customerController');
const customerRouter = express.Router();

// update token in customer 
customerRouter.put('/update-tokendevice/customer', updateDeviceToken);

// update token in customer 
customerRouter.get('/get-information-in-trip-request/drivers/:tripID', getInfoDriverInTripRequest);

module.exports = customerRouter;