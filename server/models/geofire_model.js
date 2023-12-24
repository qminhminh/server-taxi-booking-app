
const mongoose = require('mongoose');
// Model GEofire for onliner driver
const GeofireSchema = mongoose.Schema({
  idm: {
    type: String,
  },
  idf: {
    type: String,
  },
  lattitude: {
    type: Number,
  },
  longtitude: {
    type: Number,
  }
});

const Geofire = mongoose.model('OnlineDriver', GeofireSchema);
module.exports = Geofire;
