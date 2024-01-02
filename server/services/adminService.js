const Customer = require("../models/customer_model");
const Driver = require("../models/driver_model");

  // update block status driver
const updateBlockDriver = async(id) => {
  try{
    const driver = await Driver.findOne({idf: id});

    if(driver.blockStatus === "no"){
      driver.blockStatus = "yes";
      await driver.save();
    }else{
        return {
            status: 400,
            msg: "Driver is not no"
          };
      }
    
    return driver;
  }catch(e){
    return {
        status:500,
        error: e.message
    };
  }
};

// update block status driver
const updateBlockCustomer = async(id) => {
    try{
      const cusotmer = await Customer.findOne({idf: id});

      if(cusotmer.blockStatus === "no"){
        cusotmer.blockStatus = "yes";
        await cusotmer.save();
      }else{
        return {
            status: 400,
            msg: "Cusomer is not no"
          };
      }
      
      return cusotmer;
    }catch(e){
      return {
          status:500,
          error: e.message
      };
    }
};


// update block status driver
const updateUnBlockCustomer = async(id) => {
        try{
          const cusotmer = await Customer.findOne({idf: id});
          
    
          if(cusotmer.blockStatus === "yes"){
            cusotmer.blockStatus = "no";
            await cusotmer.save();
          }else{
            return {
                status: 400,
                msg: "Cusomer is not yes"
              };
          }
          
          return cusotmer;
        }catch(e){
          return {
              status:500,
              error: e.message
          };
        }
};

// update block status driver
const updateUnBlockDriver = async(id) => {
    try{
      const driver = await Driver.findOne({idf: id});
     
  
      if(driver.blockStatus === "yes"){
        driver.blockStatus = "no";
        await driver.save();
      }else{
          return {
              status: 400,
              msg: "Driver is not no"
            };
        }
      
      return driver;
    }catch(e){
      return {
          status:500,
          error: e.message
      };
    }
};
module.exports = {updateUnBlockDriver, updateUnBlockCustomer, updateBlockDriver, updateBlockCustomer};