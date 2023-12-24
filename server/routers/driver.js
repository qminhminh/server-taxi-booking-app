const express = require('express');
const { getPositionDriver, tripRequest, updateTripNewStatus, getTokenDrivers } = require('../controller/driverController');
const driverRouter = express.Router();

// get position all drivers
driverRouter.get('/get-position/drivers',getPositionDriver);

// add trip request in mongoose
driverRouter.post('/trip-request/drivers', tripRequest);

// update new status drivers
driverRouter.put('/update-status/drivers', updateTripNewStatus);

// get all token drivers
driverRouter.post('/get-token/drivers', getTokenDrivers);

module.exports = driverRouter;