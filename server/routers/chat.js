const express = require('express');
const { sendMessage, updateMessageMsg, deleteMessage } = require('../controller/chatController');
const chatRouter = express.Router();

// get all chat 
chatRouter.post('/messages', sendMessage);

// update message in chat 
chatRouter.put('/messages/update', updateMessageMsg);

// delete message in chat
chatRouter.delete('/message/delete', deleteMessage);

module.exports = chatRouter;