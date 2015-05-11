var eplApi = require('./epl_api');

const FILE_NAME = 'scores.json';

var MatchData = {

  get: function(seasonId, gameWeekId, cb) {
    eplApi.get({
      seasonId: seasonId,
      gameWeekId: gameWeekId
    }, FILE_NAME, cb)
  }

};

module.exports = MatchData;
