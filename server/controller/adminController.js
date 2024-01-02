const Customer = require("../models/customer_model");
const Driver = require("../models/driver_model");
const TripRequest = require("../models/triprequest_model");
const adminServices = require("../services/adminService");

// get all drivers 
const fetchDriver = async(req, res) =>{
  try{
    
    const drivers = await Driver.find({});

    return res.json(drivers);
  }catch(e){
    return res.status(500).json({
        error: e.message
    })
  }
};

// get all customer 
const fetchCustomer = async(req, res)=>{
    try{
      const customers = await Customer.find({});

      return res.json(customers);
    }catch(e){
        return res.status(500).json({
            error: e.message
        })
    }
};


// get all trip request
const fetchTRipRequest = async(req, res)=>{
  try{
    const trip = await TripRequest.find({});

    return res.json(trip);
  }catch(e){
      return res.status(500).json({
          error: e.message
      })
  }
};

//  update block status driver
const updateBlockDriver = async(req, res) => {
  try{
    const{id} = req.body;
    const result = await adminServices.updateBlockDriver(id);
    // console log login 
   console.log("updateBlockDriver: ");
   console.log(result);

   // check result status
   if (result.status === 400) {
      return res.status(400).json({
        msg: result.msg,
      });
    } else if (result.status === 500) {
      return res.status(500).json({
        error: result.error,
      });
   }
   return res.status(200).json(result);
    
  }catch(e){
      return res.status(500).json({
          error: e.message
      })
  }
};

//  update block status customer
const updateBlockCustomer = async(req, res) => {
  try{
    const{id} = req.body;
    const result = await adminServices.updateBlockCustomer(id);
    // console log login 
   console.log("updateBlockCustomer: ");
   console.log(result);

   // check result status
   if (result.status === 400) {
      return res.status(400).json({
        msg: result.msg,
      });
    } else if (result.status === 500) {
      return res.status(500).json({
        error: result.error,
      });
   }
   return res.status(200).json(result);
    
  }catch(e){
      return res.status(500).json({
          error: e.message
      })
  }
};

//  update unblock status customer
const updateUnBlockCustomer = async(req, res) => {
  try{
    const{id} = req.body;
    const result = await adminServices.updateUnBlockCustomer(id);
    // console log login 
   console.log("updateUnBlockCustomer: ");
   console.log(result);

   // check result status
   if (result.status === 400) {
      return res.status(400).json({
        msg: result.msg,
      });
    } else if (result.status === 500) {
      return res.status(500).json({
        error: result.error,
      });
   }
   return res.status(200).json(result);
    
  }catch(e){
      return res.status(500).json({
          error: e.message
      })
  }
};

//  update block status driver
const updateUnBlockDriver = async(req, res) => {
  try{
    const{id} = req.body;
    const result = await adminServices.updateUnBlockDriver(id);
    // console log login 
   console.log("updateUnBlockDriver: ");
   console.log(result);

   // check result status
   if (result.status === 400) {
      return res.status(400).json({
        msg: result.msg,
      });
    } else if (result.status === 500) {
      return res.status(500).json({
        error: result.error,
      });
   }
   return res.status(200).json(result);
    
  }catch(e){
      return res.status(500).json({
          error: e.message
      })
  }
};

module.exports = {updateUnBlockDriver, updateUnBlockCustomer,updateBlockCustomer,updateBlockDriver, fetchTRipRequest, fetchDriver, fetchCustomer};