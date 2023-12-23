const express = require('express');
const { getPositionDriver, tripRequest } = require('../controller/driverController');
const driverRouter = express.Router();

// get position all drivers
driverRouter.get('/get-position/drivers', getPositionDriver);
driverRouter.post('/trip-request/drivers', tripRequest);


module.exports = driverRouter;