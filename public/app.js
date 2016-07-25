jQuery( document ).ready(function() {
  console.log("script ready test");
  var socket = io();
  var room = "abc123";
  var userName = null;
  socket.on('connect', function () {
    socket.emit('room', room);
  });

  socket.on('message', function (data) {
    console.log("The message is" + data);
  });
  
  $("#create-button").bind('click',function() {
      $("#user-name").css('visibility', 'visible');
  });
  
  $("#user-name-submit").bind('click', function() {
    userName = $("#user-name-input").val();
    console.log("user name: " +userName);
  });
});
