"use strict";

var express = require('express');
var bodyParser = require('body-parser');
var mongodb = require('mongodb');

var router = express.Router();
var parseBody = bodyParser.json();

// Create
router.post('/', parseBody, function (req, res) {
  console.log('POST');
  console.log('request.body: %j', req.body);
  req.db.collection('cards')
    .insertOne(req.body)
    .then(function (r) {
      console.log('created: ' + r);
      res.status(201).json(r);
    })
    .catch(function (error) {
      console.log('error: ' + error);
    });
});

// Retrieve All
router.get('/', function(req, res){
  console.log('GET ALL');
  req.db.collection('cards')
    .find().toArray()
    .then(function (r) {
      console.log(r);
      res.status(200).json(r);
    })
    .catch(function (error) {
      console.log('error: ' + error);
    });
});

// Retrieve One
router.get('/:id', function (req, res) {
  console.log('GET ' + req.params.id);
  var id = new mongodb.ObjectID(req.params.id);
  req.db.collection('cards')
    .findOne({_id: id}, {_id: 0})
    .then(function (r) {
      console.log(r);
      res.status(200).json(r);
    })
    .catch(function (error) {
      console.log('error: ' + error);
    });
});

// Update
router.put('/:id', parseBody, function (req, res) {
  console.log('PUT ' + req.params.id);
  console.log('request.body: %j', req.body);
  var id = new mongodb.ObjectID(req.params.id);
  req.db.collection('cards')
    .updateOne({_id: id}, req.body)
    .then(function (r) {
      console.log('updated: ' + r);
      res.status(200).json(r);
    })
    .catch(function (error) {
      console.log('error: ' + error);
    });
});

// Delete
router.delete('/:id', function (req, res) {
  console.log('DELETE ' + req.params.id);
  var id = new mongodb.ObjectID(req.params.id);
  req.db.collection('cards')
    .deleteOne({_id: id})
    .then(function (r) {
      console.log(r);
      res.status(200).json(r);
    })
    .catch(function (error) {
      console.log('error: ' + error);
    });
});

module.exports = router;
