const authServices = require("../services/authServices");
const bcryptjs = require('bcryptjs');

// ========================= Customer ================================ 
// register customer
const registerCustomer = async(req, res) =>{
   try{
     
    const {email,password, name, phone, photo} = req.body;
    const hashedPass = await bcryptjs.hash(password, 8 );

    const result = await authServices.registerCustomer(email,hashedPass, name, phone, photo );
    console.log("registerCustomer: ");
    console.log(result);
    return res.json(result);

   }catch(e){
    return res.status(500).json({
       error: e.message
    });
   }
};

// login customer
const loginCutomer = async(req, res) =>{
  try{
   const{email, password, token} = req.body;
   
   const result = await authServices.loginCutomer(email, password, token);
   console.log("loginCutomer: ");
   console.log(result)
   return res.json(result);
  }catch(e){
   return res.status(500).json({
      error: e.message
   });
  }
};



module.exports = {registerCustomer, loginCutomer};