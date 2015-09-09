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
    Dog.find(function(err, dogs) {
      res.json(dogs);
    });
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
  var query = {'_id': req.params.id};
  Dog.findOne(query, function(err, dog) {
    res.json(dog);
  });
});

module.exports = router;
