const express = require('express');
const { getPositionDriver, tripRequest, updateTripNewStatus, getTokenDrivers } = require('../controller/driverController');
const driverRouter = express.Router();

// get position all drivers
driverRouter.get('/get-position/drivers',getPositionDriver);
driverRouter.post('/trip-request/drivers', tripRequest);
driverRouter.put('/update-status/drivers', updateTripNewStatus);
driverRouter.post('/get-token/drivers', getTokenDrivers);

module.exports = driverRouter;