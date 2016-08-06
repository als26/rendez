var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var usernames = {};
var rooms = ['room1','room2','room3'];

//Function to determine number of users in a room. No idea if its working correctly.
function usersInRoom(roomName) {
  var room = io.nsps['/'].adapter.rooms[roomName];
  console.log(Object.keys(room).length);
}

//var port = process.env.PORT || 3000;
//socket.join(socket.room);

//Root route aka homepage. ex localhost:3000

app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/:id', function(req, res){
  var id = req.params.id;
  res.sendFile(__dirname + '/public/game.html')
});

var numClients = {};
io.on('connection', function(socket){



  socket.on('room', function(room){
    console.log("The room is " + room);
    socket.join(room);
    console.log('A user connected with socket id: '+ socket.id + ' in room: ' + room);


    socket.room = room;
    if (numClients[socket.room] == undefined){
      console.log('First User added!');
        numClients[socket.room] = 1;
    }
    else{
      console.log('User added!');
      numClients[socket.room]++;
    }

    console.log('The number of users in room ' +room+ ' is : ' +numClients[socket.room]);
  });


  socket.on('disconnect', function(){
    numClients[socket.room]--;
    console.log('A user disconnected');
    console.log('The number of users in the room is : ' +numClients[socket.room]);
  });
});



http.listen(3000,function(){
console.log('Magic happens on port 3000');
});
