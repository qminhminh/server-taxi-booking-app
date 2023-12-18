const mongoose = require('mongoose');
const {CarDetail,cardetailSchema} = require('./car_detail_model');

const driverSchema = mongoose.Schema({

   blockStatus: {
    type: String,
    default: 'no'
   },

   cardetails: [cardetailSchema],
   deviceToken: {
    type: String,
    default: ''
   },
   email: {
    type : String,
    required:true,
    trim : true,
    validate:{
       validator: (value) => {
          const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
          return value.match(re);
       },
       message: "Please enter a valid email address",
    },
   },
   password: {
    type: String,
    required: true,
    validate:{
     validator: (value) => {
        
        return value.length > 6;
     },
     message: "Please enter a long pass",
    },
   },

   name: {
    type: String,
    default: '',
    required: true,
    trim: true
   },
   newTripStatus: {
    type: String,
    default:''
   },
   phone: {
    type: String,
    default:'',
    required: true
   },
   photo: {
    type: String,
    default: ''
   }
});

const Driver = mongoose.model('Drivers', driverSchema);
module.exports = Driver;
