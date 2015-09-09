var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Dog = mongoose.model('dogs');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'CRUD Assessment' });
});

router.post('/dogs', function(req, res, next) {
  new Dog(req.body).save(function(err, success) {
    console.log(success);
    res.json({
      message: 'Dog added successfully'
    });
  });
});

module.exports = router;
