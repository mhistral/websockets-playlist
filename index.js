// install npm install nodemon -g
// run nodemon index to run server to gitbash
// https://www.youtube.com/watch?v=vQjiN8Qgs3c&list=PL4cUxeGkcC9i4V-_ZVwLmOusj8YAUhj_9
// install socket.io - npm install socket.io --save


var express = require('express');

// App setup
var app = express();
// var server  = require('http').createServer(app);
var socket = require('socket.io').listen(server);

let port=process.env.PORT||4000;
var server =  app.listen(port, function(){
    console.log(`listening to request on port ${port}`); 
});

// var server =  app.listen(4000, function(){
//     console.log('listening to request on port 4000');
// });

// Static Files

app.use(express.static('public_html'));


// Socket setup

var io = socket(server);

io.on('connection', function(socket){
    console.log('made socket connection', socket.id)

    socket.on('chat', function(data){
        io.sockets.emit('chat', data);
    })

    socket.on('typing', function(data){
        socket.broadcast.emit('typing', data)
    })
});