var mongoose = require('mongoose');
var uriUtil = require('mongodb-uri');
var Schema = mongoose.Schema;
var URI = uriUtil.formatMongoose(process.env.mdb);

var dog = new Schema({
  name: String,
  age: Number,
  breed: String
});

var options = {
  server: {
    socketOptions: {
      keepAlive: 1,
      connectTimeoutMS: 30000
    }
  },
  replset: {
    socketOptions: {
      keepAlive: 1,
      connectTimeoutMS : 30000
    }
  }
};

mongoose.model('dogs', dog);
mongoose.connect(URI || 'mongodb://localhost/db-name', options);
