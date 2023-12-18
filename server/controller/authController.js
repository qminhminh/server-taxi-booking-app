const authServices = require("../services/authServices");
const bcryptjs = require('bcryptjs');

// register customer 
const registerCustomer = async(req, res) =>{
   try{
     
    const {email,password, name, phone, photo} = req.body;
    const hashedPass = await bcryptjs.hash(password, 8 );

    const result = await authServices.registerCustomer(email,hashedPass, name, phone, photo );
    
    return res.status(200).json(result);

   }catch(e){
    return res.status(500).json(e);
   }
};


// register drivers
const registerDrivers = async(req, res)=>{
   const{email,password, name, phone, photo, carColor, carModel, carNumber} = req.body;
   
   try{
      const result = await authServices.registerDrivers(email,password, name, phone, photo, carColor, carModel, carNumber);
      console.log(result);
      return res.status(200).json(result);

   }catch(e){
      console.log(e);
      return res.status(500).json({error: e.message});
   }

};
module.exports = {registerCustomer, registerDrivers};