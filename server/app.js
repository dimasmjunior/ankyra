"use strict";

// Configuration
var PORT = process.env.PORT || 8080;
var DB_URL = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/test';

// Express
var express = require('express');
var app = express();

// Mongo
var mongodb = require('mongodb');
var expressMongoDb = require('express-mongo-db');
app.use(expressMongoDb(DB_URL));

// Cards API
var cards = require('./cards');
app.use('/cards', cards);

// Static client
app.use(express.static(__dirname + '/../client'));

// Start App
app.listen(PORT, function () {
  console.log('Ankyra listening on port ' + PORT + '.');
});
