const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const morgan = require('morgan');
const authRouter = require('./routers/auth');
const tokenRouter = require('./routers/token');
const morgandebug = require('morgan-debug');
const adminRouter = require('./routers/admin');
const driverRouter = require('./routers/driver');
const customerRouter = require('./routers/customer');
const Driver = require('./models/driver_model');
const Customer = require('./models/customer_model');
const Chat = require('./models/chat');
const chatRouter = require('./routers/chat');
const DB = "mongodb+srv://hqminh050503:minh050503@cluster0.kornrcw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const app = express();
var server = http.createServer(app);
var io = require('socket.io')(server);
const PORT = process.env.PORT || 3000;
const PORTSERVER = process.env.PORTSERVER || 4000;

// middleware 
app.use(express.json());
app.use(morgan('combined'));
app.use(morgandebug('server:server', 'dev'));
app.use(cors());

// Router 
// router admin
app.use("/api/users", authRouter);
// router token 
app.use(tokenRouter);
// router admin
app.use("/api/admin", adminRouter)
// router driver
app.use('/api/users', driverRouter);
// router cusotmer 
app.use('/api/users', customerRouter);
// router chat
app.use('/api/chat', chatRouter);

// socket io
io.on("connection", (socket) => {

  // check disconnect
  socket.on("disconnect", () => {
    console.log("a user disconnected");
  });

  // soket on 
  socket.on("createRoomChat", async({message, time, idcus , iddriver}) => {
    try{
      
      const driver = await Driver.findOne({idf: iddriver});
      const customer = await Customer.findById(idcus);

      if(driver && customer){
        const id_driver = driver._id;
        let convertId =  getConversationID(idcus, id_driver);
        console.log(convertId);
        let chat = await Chat.findOne({ id: convertId });

        if(chat){
          const mess = {
            toId: id_driver,
            msg: message,
            sent: time,
            fromId: idcus,
          };

          chat.chats.push(mess);
          await chat.save();

          io.sockets.emit("feedbackserver", chat);
        }else{
          const chatMess = new Chat({
            id: convertId,
            chats: [
              {
                toId: id_driver,
                msg: message,
                sent: time,
                fromId: idcus,
              },
            ],
          });
          await chatMess.save();
          io.sockets.emit("feedbackserver", chat);
        }
      }
    }catch(e){
      console.log(e);
    }
  });
});

// funtion convert id 
function getConversationID(id1, id2) {
  // Xác định chatId dựa trên hai ID người dùng
  const smallerID = id1 <= id2 ? id1 : id2;
  const largerID = id1 <= id2 ? id2 : id1;
  return `${smallerID}_${largerID}`;
}


// listen port
app.listen(PORT,"0.0.0.0",()=>{
  console.log("Connect server at port: 3000");
});


// listeen Server Socket io
server.listen(PORTSERVER,"0.0.0.0",()=>{
   console.log("Connect socket.io port: 4000");
});

// connect mongodb 
mongoose.connect(DB).then(()=>{
  console.log("Connect mongoDB successfull");
}).catch((e)=>{
    console.log("Error connect mongoDB: "+e);
});