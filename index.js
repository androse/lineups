var http = require('http');
var controller = require('./app/lib/controller');
var redis = require('redis');
var redisClient = redis.createClient();

http.createServer(function(req, res) {
  controller(req, res, redisClient);
}).listen(3000, function(err) {
  if (err) throw err;
  console.log('Listening on port 3000...');
});
