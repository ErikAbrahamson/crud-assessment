var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var dog = new Schema({
  name: String,
  age: Number,
  breed: String
});

mongoose.model('dogs', dog);
mongoose.connect(null || 'mongodb://localhost/crud-assessment');
