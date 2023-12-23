const express = require('express');
const { getPositionDriver } = require('../controller/driverController');
const driverRouter = express.Router();

// get position all drivers
driverRouter.get('/get-position/drivers', getPositionDriver);


module.exports = driverRouter;