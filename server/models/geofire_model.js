
const mongoose = require('mongoose');

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
