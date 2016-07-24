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
  console.log('A user connected with socket id:'+ socket.id);

  socket.on('disconnect', function(){

    console.log('A user disconnected');
  });
});

http.listen(3000,function(){
console.log('Magic happens on port 3000');
});
