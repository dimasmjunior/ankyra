var express = require('express');
var app = express();

var PORT = process.env.PORT || 8080;
var DB = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/test';

var MongoClient = require('mongodb').MongoClient;

MongoClient.connect(DB, function(err, db) {
  console.log("Connected correctly to server.");
  db.close();
});

app.get('/cards', function(request, response){
  response.send('GET ALL');
  console.log('GET ALL');
});

app.get('/cards/:id', function (request, response) {
  response.send('GET ' + request.params.id);
  console.log('GET ' + request.params.id);
});

app.post('/cards', function (request, response) {
  response.send('POST');
  console.log('POST');
});

app.delete('/cards/:id', function (request, response) {
  response.send('DELETE ' + request.params.id);
  console.log('DELETE ' + request.params.id);
});

app.listen(PORT, function () {
  console.log('Ankyra listening on port ' + PORT + '.');
});
