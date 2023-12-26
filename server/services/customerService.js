const Customer = require("../models/customer_model");

// update device token
const updateDeviceToken = async(email, devicetoken) => {
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
      await customer.save();
      
      return customer;
    }catch(e){
      return {
        status: 500,
        error: e.message,
      };
    }
  };

  module.exports = {updateDeviceToken};