var request = require('request');

const BASE_URL = 'http://live.premierleague.com/syndicationdata';
const FILE_NAME = 'lineups.json';

function generateUrl(competitionId, seasonId, matchDayId, matchId) {
  return BASE_URL +
    '/competitionId=' + competitionId +
    '/seasonId=' + seasonId +
    '/matchDayId=' + matchDayId +
    '/matchId=' + matchId +
    '/' + FILE_NAME;
}

function parseData(data) {
  return JSON.parse(data).Data;
}

var LineUpData = {

  get: function(seasonId, matchDayId, matchId, cb) {
    var competitionId = 8;
    var url = generateUrl(competitionId, seasonId, matchDayId, matchId);

    request(url, function(err, response, body) {
      if (!err && response.statusCode == 200) {
        var lineUpData = parseData(body);
        cb(null, lineUpData)
      } else {
        var error = new Error('Invalid lineup parameters');
        cb(error, null)
      }
    });
  }
}

module.exports = LineUpData;
