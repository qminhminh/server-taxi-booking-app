const Customer = require("../models/customer_model");
const Driver = require("../models/driver_model");

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


module.exports = {fetchDriver, fetchCustomer};