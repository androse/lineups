var http = require('http');
var controller = require('./app/lib/controller');
var Matches = require('./app/lib/matches');

Matches.readData('matches_2014.json', function(err, data) {
  if (err) throw err;

  var matches = new Matches(data);
  http.createServer(function(req, res) {
    // can't make multiple requests (don't use single matches object)
    controller(req, res, matches);
  }).listen(3000, function(err) {
    if (err) throw err;
    console.log('Listening on port 3000...');
  });
});
