const authServices = require("../services/authServices");
const bcryptjs = require('bcryptjs');

// ========================= Customer ================================ 
// register customer
const registerCustomer = async(req, res) =>{
   try{
     // data for client requst server
    const {email,password, name, phone, photo, idf} = req.body;

    // hash pass password
    const hashedPass = await bcryptjs.hash(password, 8 );
    const result = await authServices.registerCustomer(email,hashedPass, name, phone, photo, idf );
    
    // console log register customer 
    console.log("registerCustomer: ");
    console.log(result);

    // check result status
    if (result.status === 400) {
      return res.status(400).json({
        msg: result.msg,
      });
    } else if (result.status === 500) {
      return res.status(500).json({
        error: result.error,
      });
    }
    return res.status(200).json(result);

   }catch(e){
    return res.status(500).json({
       error: e.message
    });
   }
};

// login customer
const loginCutomer = async(req, res) =>{
  try{
   // data in client equest server
   const{email, password} = req.body;
   const result = await authServices.loginCutomer(email, password);
   
   // console log login 
   console.log("loginCutomer: ");
   console.log(result);

   // check result status
   if (result.status === 400) {
      return res.status(400).json({
        msg: result.msg,
      });
    } else if (result.status === 500) {
      return res.status(500).json({
        error: result.error,
      });
   }
   return res.status(200).json(result);
  }catch(e){
   return res.status(500).json({
      error: e.message
   });
  }
};

module.exports = {registerCustomer, loginCutomer};