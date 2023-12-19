const express = require('express');
const { tokenIsvalidCustomer, getUserTokenCustomer } = require('../controller/tokenController');
const tokenRouter = express.Router();

// token users customer
tokenRouter.post("/tokenisvalidcustomer", tokenIsvalidCustomer);
tokenRouter.get("/", getUserTokenCustomer);

module.exports = tokenRouter;