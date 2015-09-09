var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var dogs = new Schema({
  name: String,
  age: Number,
  breed: String
});

mongoose.model('dog', dogs);
mongoose.connect(null || 'mongodb://localhost/crud-assessment');
