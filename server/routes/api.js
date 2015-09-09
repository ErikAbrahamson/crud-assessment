var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Dog = mongoose.model('dogs');

// SPA Render
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CRUD Assessment' });
});

// API Form Post
router.post('/dogs', function(req, res, next) {
  new Dog(req.body).save(function(err, success) {
    res.render('index', { title: 'CRUD Assessment'});
  });
});

// API Get Collection
router.get('/dogs', function(req, res, next) {
  Dog.find(function(err, dogs) {
    res.json(dogs);
  });
});

// API Get Single Dog
router.get('/dogs/:id', function(req, res, next) {
  var query = {'_id': {'$oid': req.params.id}};
  Dog.findOne(query, function(err, dog) {
    res.json(dog);
  });
});

// API Put/edit Single Dog
router.put('/dogs/:id', function(req, res, next) {
  var query = {'_id':req.params.id},
    update = req.body, options = {new: true};
    Dog.findOneAndUpdate(query, update, options, function(err, dog) {
      res.json(dog);
    }
  );
});

// API Delete Single Dog
router.delete('/dogs/:id', function(req, res) {
  var query = {'_id': {'$oid': req.params.id}};
  Dog.findOneAndRemove(query, function(err, dog) {
    res.json(dog);
  });
});

module.exports = router;
