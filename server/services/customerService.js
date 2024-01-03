const Customer = require("../models/customer_model");
const Driver = require("../models/driver_model");
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


// rating driver 
const ratingDriver = async (userId, rating, idf, tripID) => {
  try {
    const driver = await Driver.findOne({ idf: idf });
    const trip = await TripRequest.findOne({ tripID: tripID });

    // Check if driver and trip exist
    if (!driver || !trip) {
      return {
        status: 400,
        msg: trip,
      };
    }

    // Update driver ratings
    const existingRating = driver.ratings.find((r) => r.tripID === tripID);

    if (!existingRating) {
      // If userId doesn't exist, add a new rating
      let rate = {
        userId: userId,
        rating: rating,
      };
      driver.ratings.push(rate);
      await driver.save();
      
      trip.ratings = rating;
      await trip.save();
    }else{
      existingRating.rating = rating;
      await driver.save();

      trip.ratings = rating;
      await trip.save();
    }

    // Update trip ratings
  
    return driver;
  } catch (e) {
    return {
      status: 500,
      error: e.message,
    };
  }
};

  module.exports = {ratingDriver, getInfoDriverInTripRequest, updateDeviceToken};