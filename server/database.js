var mongoose = require('mongoose');
var uriUtil = require('mongodb-uri');
var Schema = mongoose.Schema;
var URI = uriUtil.formatMongoose('mongodb://heroku_mgr200d3:ioc6l977u77vvau91bo7emghae@ds051848.mongolab.com:51848/heroku_mgr200d3');

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
mongoose.connect(URI, options);
