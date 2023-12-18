const mongoose = require('mongoose');

const customerSchema = mongoose.Schema({
    blockStatus: {
        type: String,
        default: 'no'
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
       phone: {
        type: String,
        default:'',
        required: true
       },
       photo: {
        type: String,
        default: ''
       },
       type: {
         type: String,
         default: 'user'
       }  
});

const Customer = mongoose.model('Users', customerSchema);
module.exports = Customer;
