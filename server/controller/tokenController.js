const bcryptjs = require('bcryptjs');
const Customer = require('../models/customer_model');
const Driver = require('../models/driver_model');

// ====================== * TOken is valid Customer *========================

// get token isvalid 
const tokenIsvalidCustomer = async(req, res)=>{
    try{
     const token = req.header('x-auth-token');
     if(!token) return res.json(false);
  
     const verified= jwt.verify(token,'passwordKey');
     if(!verified) return res.json(false);
  
     const user = await Customer.findById(verified.id);
     if(!user) return res.json(false);
     res.json(true);
    }catch(e){
     return res.status(500).json({
        error: e.message
     });
    }
  };


  const getUserTokenCustomer = async(req, res) =>{
    const user = await Customer.findById(req.user);
    res.json({...user._doc, token: req.token});
  };



  module.exports = {tokenIsvalidCustomer, getUserTokenCustomer};