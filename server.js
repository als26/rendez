var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var port = process.env.PORT || 3000;


//Root route aka homepage. ex localhost:3000
app.get('/', function(req, res){
  res.send("It's alive, run!");
});

app.listen(port);
