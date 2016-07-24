var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var usernames = {};
var rooms = ['room1','room2','room3'];

//var port = process.env.PORT || 3000;
//socket.join(socket.room);

//Root route aka homepage. ex localhost:3000
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){

  socket.on('room', function(room){
    console.log("The room is" + room);
    socket.join(room);
  });
  console.log('A user connected with socket id:'+ socket.id);
  // These 2 lines don't seem to be working.
  var room = "abc123";
  io.in(room).emit('message', 'Hey everyone');

  socket.on('disconnect', function(){

    console.log('A user disconnected');
  });
});



http.listen(3000,function(){
console.log('Magic happens on port 3000');
});
