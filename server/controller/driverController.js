const Geofire = require("../models/geofire_model");
const driverServices = require("../services/driverService");

const getPositionDriver = async(req, res) =>{
  try{
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

const tripRequest = async(req, res) => {
  try{
    const{tripID, publishDateTime, userName, userPhone, userID, latpick, longpick, latdrop, longdrop, pickUpAddress, dropOffAddress, driverID, latdriver, longdriver} = req.body;
    const result = await driverServices.tripRequest(tripID, publishDateTime, userName, userPhone, userID, latpick, longpick, latdrop, longdrop, pickUpAddress, dropOffAddress, driverID, latdriver, longdriver);
    console.log("tripRequest: ");
    console.log(result);
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

const updateTripNewStatus = async(req, res) =>{
  try{
     const {driverid, trip} = req.body;
     const result = await driverServices.updateTripNewStatus(driverid, trip);
     console.log("updateTripNewStatus: ");
     console.log(result);
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


const getTokenDrivers = async(req, res) => {
  try{
    const{uiddriver} = req.body;
    const result = await driverServices.getTokenDrivers(uiddriver);
    console.log("getTokenDrivers: ");
    console.log(result);
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