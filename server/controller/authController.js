const authServices = require("../services/authServices");
const bcryptjs = require('bcryptjs');

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

module.exports = {registerCustomer};