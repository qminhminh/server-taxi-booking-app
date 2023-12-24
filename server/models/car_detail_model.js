
const mongoose = require('mongoose');
// Car detlai Model
const cardetailSchema = new mongoose.Schema({
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

const CarDetail = mongoose.model('Cardetail', cardetailSchema);
module.exports = {CarDetail,cardetailSchema};