var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Dog = mongoose.model('dog');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'CRUD Assessment' });
});

module.exports = router;
