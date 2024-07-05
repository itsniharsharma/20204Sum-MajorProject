//Node server which will handel socket.io connections

// const io = require('socket.io')(8000)   //created a server and requested a requirement from socket.io at port 5000

// const users={}; //created a user

/*
 - server.on is a socket.io instant, which listens a soo many connections
 - Like Nihar joined, Kunal joined, divyam joined etc
 - socket.on tackels with a perticular connection
 - Connection and new-user-joined are names of event
 - which will return a callback like socket or name
 - socket.on is accepting an event, like jab he muje new-user-joined mila i will give it a unique id
 - socket.on will append new-user-joined automatically in users={}
 - say, Nihar, Kunal, Divyam chatting, and Raghav joined, socket.broadcast.emit('user-joined') will brodcast his join to existing people without intimating Raghav
*/
// io.on('connection', socket=>{
//     socket.on('new-user-joined', Username=>{
//          console.log('New user', Username);
//          users[socket.id] = Username;       //give the joined user a unique socket id named 'name'
//          socket.broadcast.emit('user-joined', Username);
//     });

//     socket.on('sendedMsg', message=>{      //message bheja kisine, use handle kro
//         socket.broadcast.emit('receive', {message: message, Username: users[socket.id]})
//     });
// })



//--------------------------------------------- Havnt get this part



const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);

// Manually set CORS headers
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:5500'); // Allow your client origin
    res.header('Access-Control-Allow-Methods', 'GET, POST');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});



//-----------------------------------------------

// "CORS" stands for Cross-Origin Resource Sharing. It's a security feature implemented by web browsers to control how resources are shared between different origins (domains).

const io = new Server(server, {
    cors: {
        origin: "http://127.0.0.1:5500", // Allow your client origin
        methods: ["GET", "POST"],
        allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept"],
        credentials: true
    }
});

const users = {}; // Track connected users

io.on('connection', socket=>{
    console.log('A user connected:', socket.id);

    socket.on('new-user-joined', username=>{
        console.log(username, 'joined the chat');
        users[socket.id] = username; // Assign the username to the socket ID
        socket.broadcast.emit('user-joined', username); 
    });

    socket.on('send', message=> {
        const username = users[socket.id];
        socket.broadcast.emit('receive', { message: message, username: users[socket.id] });
    });

    socket.on('disconnect', message=>{
        socket.broadcast.emit('left', users[socket.id]);
        delete users[socket.id];
    })

});

server.listen(8000, () => {
    console.log('Server is running on port 8000');
});






