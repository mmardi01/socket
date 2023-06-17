const express = require('express');
const http = require('http');
const app  = express();
const {Server} = require('socket.io');
const cors = require('cors');
const { connect } = require('http2');

app.use(cors());

const server = http.createServer(app);
const io = new Server(server,{
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
})

app.get("/", (req,res) => {
    console.log("heeere");
})

io.on('connection', (socket)=> {
    console.log('connect',socket.id);
    socket.on('send',(socket)=>{
        console.log('get',socket.message);
    })
})

server.listen(3001,()=> {
    console.log('server is runing')
})