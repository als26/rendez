jQuery( document ).ready(function() {
  console.log("script ready test");

  $("#create-button").bind('click',function() {
      $("#user-name").css('visibility', 'visible');
  });

  $("#user-name-submit").bind('click', function() {
    userName = $("#user-name-input").val();
    console.log("user name: " +userName);
  });
});

//Generate random roomId
function generateRoomId() {
  var roomId = "";
  var options = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

  for (var i = 0; i < 6; i++) {
    // Math.random() returns a number between 0 and 1. This number is mulitplied
    // by the length of the options array then rounded down to the nearest whole number
    // with Math.floor(). This generated number becomes the index accessed in the 'options' char array
    // that will be added to the roomId.
    roomId = roomId + options.charAt(Math.floor(Math.random() * options.length));
  }
  return roomId;
}

function connectRoom() {
  var socket = io();
  var room = generateRoomId();

  socket.on('connect', function () {
    socket.emit('room', room);
  });
}
