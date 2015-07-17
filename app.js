var express = require('express');
var morgan  = require('morgan');
var app     = express();

app.use(morgan('combined'));
app.use(express.static('public'));

app.get('/', function(request, response){
  response.sendFile(__dirname + '/index.html');
});

app.get('/style.css', function(req, response){
  response.sendFile(__dirname + '/style.css');
});

app.listen(process.env.port || 5000);