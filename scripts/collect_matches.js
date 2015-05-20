var matchData = require('../app/lib/match_data');
var fs = require('fs');
var path = require('path');

function collectAllMatches(year, file) {
  var allMatches = [];
  for (var md = 1; md <= 38; md++) {

    if (md === 38) {
      var cb = function(err, data) {
        allMatches = allMatches.concat(parseData(data));
        writeData(allMatches, file);
      }
    } else {
      var cb = function(err, data) {
        allMatches = allMatches.concat(parseData(data));
      }
    }

    matchData.get(year, md, cb);
  }
}

function parseData(data) {
  return [].concat.apply([], data.map(function(day) { return day.scores; }));
}

function writeData(data, file) {
  jsonData = JSON.stringify(data);
  fs.writeFile(file, jsonData, function(err, written, string) {
    if (err) {
      console.log(err);
    } else {
      console.log('Data successfully written to ' + file);
    }
  });
}

function test() {
  matchData.get(2014, 35, function(err, data) {
    console.log(parseData(data));
  });
}

var year = process.argv[2];
var writePath = path.resolve(__dirname, '../data/matches_' + year + '.json');

collectAllMatches(year, writePath);
