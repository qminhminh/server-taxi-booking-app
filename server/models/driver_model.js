const mongoose = require('mongoose');


const driverSchema = mongoose.Schema({

   blockStatus: {
    type: String,
    default: 'no'
   },

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
   },
   deviceToken: {
    type: String,
   },
   token: {
      type: String,
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
   },
   phone: {
    type: String,
    default:'',
    required: true
   },
   photo: {
    type: String,
    default: ''
   },
   idf: {
      type: String,
   }
});

const Driver = mongoose.model('Drivers', driverSchema);
module.exports = Driver;
