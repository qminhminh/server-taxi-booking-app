
const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');
const Customer = require('../models/customer_model');
const Driver = require('../models/driver_model');
const { CarDetail } = require('../models/car_detail_model');


// ============================* Customer *=====================================
// register cutomer
const registerCustomer = async(email, hashedPass, name, phone, photo)=>{
    try{
        const exitUser = await Customer.findOne({email});
        const exitphone = await Customer.findOne({phone});
        
        if(exitUser){
            return {
              status: 400,
              msg: "User with same email already exists"
            };
        }
        if(exitphone){
          return {
            status: 400,
            msg: "User with same phone number already exists"
          };
        }
       
        let customer = new Customer({            
           email: email,
           password: hashedPass, 
           name: name, 
           phone: phone, 
           photo: photo,
        });
        customer = await customer.save();
        return customer;
    }
    catch(e){
      return {
        status:500,
        error: e.message
      }
    }
};

//login customer 
const loginCutomer = async(email, password, tokenn)=>{
   try{
     const user = await Customer.findOne({email});
     const isMatch = bcryptjs.compare(password,user.password);
     
     if(!user){
      return {
        status: 400,
        msg: "User with same email or password already not exists"
      };
     }else{
           user.token = tokenn;
           await user.save();
     }
     
      //bcryptjs
      if(!isMatch){
         return {
          status: 400,
          msg: "Incorrect password"
        };
      }

      const token = jwt.sign({id: user._id},"passwordKey");
      
      return {token, ...user._doc};
     
   }catch{
    return {
      status: 500,
      error: e.message,
    }
   }
};


module.exports = {registerCustomer,loginCutomer};