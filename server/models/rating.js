const mongoose = require("mongoose");

const ratingSchema = mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  tripID: {
    type: String,
    required: true,
  }
});

module.exports = ratingSchema;
