var Matches = require('../app/lib/matches');
var lineUpData = require('../app/lib/line_up_data');
var redis = require('redis');
var redisClient = redis.createClient();

function storeLineUp(key, data) {
  redisClient.set(key, JSON.stringify(data));
}

function getLineUp(match) {
  if (Date.now() > Date.parse(match.dateTime)) {
    var home = match.homeTeam.code.toLowerCase();
    var away = match.awayTeam.code.toLowerCase();
    var year = 2014;
    var matchDayId = match.matchDayId;
    var id = match.id;

    var key = year + home + away;

    lineUpData.get(year, matchDayId, id, function(err, data) {
      console.log(key);
      if (err) {
        throw err;
      } else {
        storeLineUp(key, data);
        console.log('saved');
      }
    });
  }
}

function collectMatches(matches) {
  var matchData = matches.data;
  matchData.forEach(getLineUp);
}

Matches.readData('matches_2014.json', function(err, data) {
  if (err) {
    throw err;
  } else {
    console.log('starting');
    var matches = new Matches(data);
    collectMatches(matches);
  }
});
