const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const morgan = require('morgan');
const authRouter = require('./routers/auth');
const DB = "mongodb+srv://hqminh050503:minh050503@cluster0.kornrcw.mongodb.net/?retryWrites=true&w=majority";
const app = express();
var server = http.createServer(app);
var io = require('socket.io')(server);
const PORT = process.env.PORT || 3000;
const PORTSERVER = process.env.PORT || 4000;

// middleware 
app.use(express.json());
app.use(morgan('combined'));
app.use(cors());
app.use("/api/customer",authRouter);


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