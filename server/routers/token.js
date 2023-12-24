const express = require('express');
const auth = require('../middlewares/auth');
const jwt = require('jsonwebtoken');
const Customer = require('../models/customer_model');
const tokenRouter = express.Router();

// token users customer
tokenRouter.post("/tokenisvalidcustomer", async(req, res)=>{
    try{
      // token in client sned drivers
     const token = req.header('x-auth-token');
     if(!token) return res.json(false);
     
     // check password
     const verified= jwt.verify(token,'passwordKey');
     if(!verified) return res.json(false);
      
     const user = await Customer.findById(verified.id);
     if(!user) return res.json(false);
     res.json(true);
    }catch(e){
     return res.status(500).json({
        error: e.message
     });
    }});

// get user 
tokenRouter.get("/",auth, async(req, res) =>{
    const user = await Customer.findById(req.user);
    res.json({...user._doc, token: req.token});
  });

module.exports = tokenRouter;