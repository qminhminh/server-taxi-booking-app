const customerServices = require("../services/customerService");


// update device token 
const updateDeviceToken = async(req, res) =>{
    try{
       // data for Client request server
       const {email, devicetoken} = req.body;
       const result = await customerServices.updateDeviceToken(email, devicetoken);
       
       // console log update device device token
       console.log("updateDeviceToken: ");
       console.log(result);
       
       // check result
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

  module.exports = {updateDeviceToken};