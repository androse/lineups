var eplApi = require('./epl_api');

const FILE_NAME = 'lineups.json';

var LineUpData = {

  get: function(seasonId, matchDayId, matchId, cb) {
    eplApi.get({
      seasonId: seasonId,
      matchDayId: matchDayId,
      matchId: matchId
    }, FILE_NAME, cb);
  }

};

module.exports = LineUpData;
