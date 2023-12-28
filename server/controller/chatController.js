const chatServices = require("../services/chatService");

//send message 
const sendMessage = async(req, res) => {
  try{
      // data for client requst server
      const {idcus, iddriver} = req.body;

      const result = await chatServices.sendMessage(idcus, iddriver);
      
      // console log sendMessage customer 
      console.log("sendMessage: ");
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

// update message in chat
const updateMessageMsg = async(req, res) => {
  try{
      // data for client requst server
      const {idcus, iddriver, sent, msg} = req.body;

      const result = await chatServices.updateMessageMsg(idcus, iddriver, sent, msg);
      
      // console log sendMessage customer 
      console.log("updateMessageMsg: ");
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


// delete message in chat
const deleteMessage = async(req, res) => {
  try{
      // data for client requst server
      const {idcus, iddriver, sent} = req.body;

      const result = await chatServices.deleteMessage(idcus, iddriver, sent);
      
      // console log sendMessage customer 
      console.log("deleteMessage: ");
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
module.exports = {updateMessageMsg, sendMessage, deleteMessage};