var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

var path = require('path');

app.use(express.static(__dirname + '/build/default'));
app.listen(port);

app.get('/', function(req, res){
  res.sendFile("index.html", {root:'.'});
});