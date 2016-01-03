var express = require('express');
var bodyParser = require('body-parser');
var mongodb = require('mongodb');

var app = express();
var parseUrlencoded = bodyParser.urlencoded({ extended: false });

var PORT = process.env.PORT || 8080;

var DB_URL = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/test';
var cards;

mongodb.MongoClient.connect(DB_URL, function(err, db) {
  cards = db.collection('cards');
  console.log("Connected do MongoDB.");
});

app.get('/cards', function(request, response){
  response.send('GET ALL');
  console.log('GET ALL');
});

app.get('/cards/:id', function (request, response) {
  response.send('GET ' + request.params.id);
  console.log('GET ' + request.params.id);
});

app.post('/cards', parseUrlencoded, function (req, res) {
  console.log('request.body: ' + req.body);
  cards.insertOne(req.body)
    .then(function (r) {
      console.log('created: ' + r);
      res.status(201).json(r);
    })
    .catch(function (error) {
      console.log('error: ' + error);
    });
});

app.delete('/cards/:id', function (request, response) {
  response.send('DELETE ' + request.params.id);
  console.log('DELETE ' + request.params.id);
});

app.listen(PORT, function () {
  console.log('Ankyra listening on port ' + PORT + '.');
});
