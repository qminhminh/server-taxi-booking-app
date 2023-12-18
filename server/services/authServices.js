
const jwt = require('jsonwebtoken');
const Customer = require('../models/customer_model');

const registerCustomer = async(email, hashedPass, name, phone, photo)=>{
    try{
        const exitUser = await Customer.findOne({email});
        if(exitUser){
            return res.status(400).json({msg: "User with same email already exists"});
        }
       
        let customer = new Customer({            email: email,
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
        error: e.message
      }
    }
};

module.exports = {registerCustomer};