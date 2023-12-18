
const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');
const Customer = require('../models/customer_model');
const Driver = require('../models/driver_model');
const { CarDetail } = require('../models/car_detail_model');


// register customer 
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


// register drivers
const registerDrivers = async(email,password, name, phone, photo, carColor, carModel, carNumber)=>{

  try{
      
    const exitUser = await Driver.findOne({email});
    const exitUsercus = await Customer.findOne({email});
    const exitphone = await Driver.findOne({phone});
    
    if(exitUser || exitUsercus){
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
    const hashedPass = await bcryptjs.hash(password, 8 );
    // car detail
    let car = new CarDetail({
        carColor: carColor,
        carModel: carModel,
        carNumber: carNumber,
    });
    // add driver
    let driver = new Driver({
      cardetails:[
       {
        carColor: carColor,
        carModel: carModel,
        carNumber: carNumber,
       },
      ],
      email: email,
      password: hashedPass,
      name: name,
      phone: phone,
      photo: photo,
    });
    
    await car.save();
    driver = await driver.save();
    
    return driver;

  }catch(e){
    return {
      status:500,
      error: e.message
    };
  }

};
module.exports = {registerCustomer, registerDrivers};