const Driver = require("../models/driver_model");
const TripRequest = require("../models/triprequest_model");

// add trip request 
const tripRequest = async(tripID, publishDateTime, userName, userPhone, userID, latpick, longpick, latdrop, longdrop, pickUpAddress, dropOffAddress, driverID, latdriver, longdriver)=>{
try{
  // find tripid in tiprequest
  const trip = await TripRequest.findOne({tripID});

  if(!trip){
    let tripdriver = new TripRequest({
        tripID: tripID,
        publishDateTime: publishDateTime,
        userName: userName,
        userPhone: userPhone,
        userID: userID,
        pickUpLatLng: {
            latitude: latpick,
            longitude: longpick
        },
        dropOffLatLng: {
            latitude: latdrop,
            longitude: longdrop
        },
        pickUpAddress: pickUpAddress,
        dropOffAddress: dropOffAddress,
        driverID: driverID,
        driverLocation: {
            latitude: latdriver,
            longitude: longdriver
        },
    });

    await tripdriver.save();
  }
  else{
    trip.tripID = tripID;
    trip.publishDateTime= publishDateTime
    trip.userName = userName;
    trip.userPhone = userPhone;
    trip.userID = userID;
    trip.pickUpLatLng.latitude = latpick;
    trip.pickUpLatLng.longitude = longpick;
    trip.dropOffLatLng.latitude = latdrop;
    trip.dropOffLatLng.longitude = longdrop;
    trip.pickUpAddress = pickUpAddress;
    trip.dropOffAddress = dropOffAddress;
    trip.driverID = driverID;
    trip.driverLocation.latitude = latdriver;
    trip.driverLocation.longitude = longdriver;
    
    await trip.save();
  }

  return trip;
}catch(e){
    return {
        status:500,
        error: e.message
      };
};
};

// update trip new status
const updateTripNewStatus = async(driverid, trip) =>{
   try{
    // update all newTripstatus = trip based driverid
     const driver = await Driver.updateMany(
      { idf: { $in: driverid } },
      { newTripStatus: trip }
    );
     
     if (!driver) {
      return {
        status: 400,
        msg: driverid
      };
    }

 // Sử dụng biến trip thay vì 'trip'
    await driver.save();

    return {
      status: 200,
      data: driver
    };

   }catch(e){
    return {
      status:500,
      error: e.message
    };
   }
};

// get all token drivers 
const getTokenDrivers = async(uiddriver) => {
  try{
    const drivers = await Driver.find({ idf: { $in: uiddriver } });
    
    const tokens = drivers.map(driver => driver.deviceToken);
    
    return {
      status: 200,
      data: tokens,
    };
  }catch(e){
    return {
      status:500,
      error: e.message
    };
  }
};

module.exports = {tripRequest, updateTripNewStatus, getTokenDrivers};