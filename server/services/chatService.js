const Chat = require("../models/chat");
const Driver = require("../models/driver_model");

// update device token
const sendMessage = async(idcus, iddriver) => {
    try{
      const driver = await Driver.findOne({idf: iddriver});
      const id_driver = driver._id;
      let convertId =  getConversationID(id_driver,idcus);
      console.log(convertId);
      const chat = await Chat.findOne({id: convertId});
      // check driver
      if(!chat){
        return {
          status: 400,
          msg: "chat not exist"
        };
      }
      
      return chat;
    }catch(e){
      return {
        status: 500,
        error: e.message,
      };
    }
};

// update Message Msg
const updateMessageMsg = async(idcus, iddriver, sent, msg) => {
    try{
      
      let convertId =  getConversationID(iddriver,idcus);
      console.log(convertId);
      const chat = await Chat.findOne({id: convertId});
      // check driver
      if(!chat){
        return {
          status: 400,
          msg: "chat not exist"
        };
      }
      const message = chat.chats.find((msg) => msg.sent === sent);
      if(message){
        console.log(message);
        message.msg = msg;

        await chat.save();
      }
      return chat;
    }catch(e){
      return {
        status: 500,
        error: e.message,
      };
    }
};

// delete message in chat
const deleteMessage = async(idcus, iddriver, sent) => {
    try{
      
      let convertId = getConversationID(iddriver,idcus);
      console.log(convertId);
      const chat = await Chat.findOne({id: convertId});
      // check driver
      if(!chat){
        return {
          status: 400,
          msg: "chat not exist"
        };
      }

      let messageIndex = chat.chats.findIndex((msg) => msg.sent === sent);
      if (messageIndex !== -1) {
        chat.chats.splice(messageIndex, 1);
        await chat.save();
      }
      return chat;
    }catch(e){
      return {
        status: 500,
        error: e.message,
      };
    }
};


function getConversationID(id1, id2) {
    // Xác định chatId dựa trên hai ID người dùng
    const smallerID = id1 <= id2 ? id1 : id2;
    const largerID = id1 <= id2 ? id2 : id1;
    return `${smallerID}_${largerID}`;
}
  

module.exports = {sendMessage, updateMessageMsg, deleteMessage};
