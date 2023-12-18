
const mongoose = require('mongoose');

const cardetailSchema = mongoose.Schema({
   carColor: {
    type: String,
    default:'',
    required: true
   },

   carModel: {
    type: String,
    default:'',
    required: true
   },

   carNumber: {
    type: String,
    default: '',
    required: true
   }

});

const CarDetail = mongoose.model('CarDetail', cardetailSchema);
module.exports = CarDetail;