const TripRequest = require("../models/triprequest_model");

const tripRequest = async(tripID, publishDateTime, userName, userPhone, userID, latpick, longpick, latdrop, longdrop, pickUpAddress, dropOffAddress, driverID, latdriver, longdriver)=>{
try{
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
      }
};
};

module.exports = {tripRequest};