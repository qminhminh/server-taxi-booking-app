const Customer = require("../models/customer_model");
const TripRequest = require("../models/triprequest_model");

// update device token
const updateDeviceToken = async(email, devicetoken, uid) => {
    try{
      const customer = await Customer.findOne({email});
      
      // check driver
      if(!customer){
        return {
          status: 400,
          msg: "Driver Online not exist"
        };
      }
      
      // update token
      customer.token = devicetoken;
      customer.idf = uid;
      await customer.save();
      
      return customer;
    }catch(e){
      return {
        status: 500,
        error: e.message,
      };
    }
  };

// get inform ation for driver
const getInfoDriverInTripRequest = async() => {
  try{
    const trip = await TripRequest.findOne({tripID: tripID});
    
    // check driver
    if(!trip){
      return {
        status: 400,
        msg: "get inform ation for driver not exist"
      };
    }
    
    return trip;
  }catch(e){
    return {
      status: 500,
      error: e.message,
    };
  }
};

  module.exports = {getInfoDriverInTripRequest, updateDeviceToken};