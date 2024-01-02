const express = require('express');
const { updateDeviceToken, getInfoDriverInTripRequest, ratingDriver } = require('../controller/customerController');
const customerRouter = express.Router();

// update token in customer 
customerRouter.put('/update-tokendevice/customer', updateDeviceToken);

// update token in customer 
customerRouter.get('/get-information-in-trip-request/drivers/:tripID', getInfoDriverInTripRequest);

// rating driver
customerRouter.post('/rate/driver', ratingDriver);

module.exports = customerRouter;