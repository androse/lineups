var fs = require('fs');
var path = require('path');

function Matches(data) {
  this.data = data;
}

// also return week id
Matches.prototype.findByTeams = function(homeCode, awayCode) {
  for (i in this.data) {
    var match = this.data[i];

    if (match.HomeTeam.Code.toLowerCase() === homeCode &&
      match.AwayTeam.Code.toLowerCase() === awayCode) {
        return {
          id: match.Id,
          weekId: match.GameWeekId
        }
      }
  }

  return null;
}

// Class methods
Matches.readData = function(fileName, cb) {
  var dataDir = '../../data/';
  var absolutePath = path.resolve(__dirname, dataDir, fileName);
  fs.readFile(absolutePath, function(err, data) {
    if (err) {
      cb(err, null);
    } else {
      cb(null, JSON.parse(data));
    }
  });
}

module.exports = Matches;
