const express = require('express');
const { tokenIsvalidCustomer, getUserTokenCustomer } = require('../controller/tokenController');
const auth = require('../middlewares/auth');
const tokenRouter = express.Router();

// token users customer
tokenRouter.post("/tokenisvalidcustomer", tokenIsvalidCustomer);
tokenRouter.get("/",auth, getUserTokenCustomer);

module.exports = tokenRouter;