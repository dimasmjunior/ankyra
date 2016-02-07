"use strict";

var express = require('express');
var bodyParser = require('body-parser');
var mongodb = require('mongodb');

var app = express();
var parseUrlencoded = bodyParser.json();

var PORT = process.env.PORT || 8080;

var DB_URL = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/test';
var cards;

mongodb.MongoClient.connect(DB_URL, function(err, db) {
  cards = db.collection('cards');
  console.log("Connected do MongoDB.");
});

app.use(express.static(__dirname + '/client'));

app.get('/cards', function(req, res){
  console.log('GET ALL');
  cards.find().toArray()
    .then(function (r) {
      console.log(r);
      res.status(200).json(r);
    })
    .catch(function (error) {
      console.log('error: ' + error);
    });
});

app.get('/cards/:id', function (req, res) {
  console.log('GET ' + req.params.id);
  var id = new mongodb.ObjectID(req.params.id);
  cards.findOne({_id: id}, {_id: 0})
    .then(function (r) {
      console.log(r);
      res.status(200).json(r);
    })
    .catch(function (error) {
      console.log('error: ' + error);
    });
});

app.put('/cards/:id', parseUrlencoded, function (req, res) {
  console.log('PUT ' + req.params.id);
  console.log('request.body: %j', req.body);
  var id = new mongodb.ObjectID(req.params.id);
  cards.updateOne({_id: id}, req.body)
    .then(function (r) {
      console.log('updated: ' + r);
      res.status(200).json(r);
    })
    .catch(function (error) {
      console.log('error: ' + error);
    });
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
