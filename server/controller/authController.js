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
   const{email, password} = req.body;
   
   const result = await authServices.loginCutomer(email, password);
   console.log("loginCutomer: ");
   console.log(result);
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