const Geofire = require("../models/geofire_model");
const driverServices = require("../services/driverService");

// get position driver 
const getPositionDriver = async(req, res) =>{
  try{
      // get all deo fire
      const postion = await Geofire.find({});
      return res.json(postion);
  }catch(e){
    return res.status(500).json(
        {
            error: e.message
        }
    );
  }
};

// add trip request 
const tripRequest = async(req, res) => {
  try{
    // data in request client 
    const{tripID, publishDateTime, userName, userPhone, userID, latpick, longpick, latdrop, longdrop, pickUpAddress, dropOffAddress, driverID, latdriver, longdriver} = req.body;
    const result = await driverServices.tripRequest(tripID, publishDateTime, userName, userPhone, userID, latpick, longpick, latdrop, longdrop, pickUpAddress, dropOffAddress, driverID, latdriver, longdriver);
   
    // console log result for trip request 
    console.log("tripRequest: ");
    console.log(result);

    // check result
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
    return res.status(500).json(
      {
          error: e.message
      }
  );
  }
};

// updatde trip new trip status 
const updateTripNewStatus = async(req, res) =>{
  try{
    // data in request client 
     const {driverid, trip} = req.body;
     const result = await driverServices.updateTripNewStatus(driverid, trip);

     // console log result for update new trip status 
     console.log("updateTripNewStatus: ");
     console.log(result);

     // check status
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
    return res.status(500).json(
      {
          error: e.message
      }
    );
  }
};

// get all token drivers 
const getTokenDrivers = async(req, res) => {
  try{
    // data in request client 
    const{uiddriver} = req.body;
    const result = await driverServices.getTokenDrivers(uiddriver);

    // console log result for get token driver
    console.log("getTokenDrivers: ");
    console.log(result);

    // check status
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
    return res.status(500).json(
      {
          error: e.message
      }
    );
  }
};

module.exports = { getPositionDriver, tripRequest, updateTripNewStatus, getTokenDrivers};