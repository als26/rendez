jQuery( document ).ready(function() {
  console.log("script ready test");
  var socket = io();
  var room = "abc123";
  socket.on('connect', function () {
    socket.emit('room', room);
  });
  
  socket.on('message', function (data) {
    console.log("The message is" + data);
  });
});