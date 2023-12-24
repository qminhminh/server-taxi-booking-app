
const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');
const Customer = require('../models/customer_model');




// ============================* Customer *=====================================
// register cutomer
const registerCustomer = async(email, hashedPass, name, phone, photo)=>{
    try{
        // check exist user and phone
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
        
        // save customer 
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
const loginCutomer = async(email, password)=>{
   try{
    // check emial exist and bycryjs password
     const user = await Customer.findOne({email});
     const isMatch = bcryptjs.compare(password,user.password);
     
     if(!user){
      return {
        status: 400,
        msg: "User with same email or password already not exists"
      };
     }
     
      //bcryptjs
      if(!isMatch){
         return {
          status: 400,
          msg: "Incorrect password"
        };
      }
      
      // token for users
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