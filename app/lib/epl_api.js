var request = require('request');

const BASE_URL = 'http://live.premierleague.com/syndicationdata/competitionId=8';

function generateUrl(parameters, fileName) {
  var urlParameters = '';

  for (var key in parameters) {
    urlParameters += '/' + key + '=' + parameters[key];
  }

  return BASE_URL + urlParameters + '/' + fileName;
}

function parseData(data) {
  return JSON.parse(data).Data;
}

var EplApi = {

  get: function(parameters, fileName, cb) {
    var url = generateUrl(parameters, fileName);

    request(url, function(err, response, body) {
      if (!err && response.statusCode == 200) {
        var data = parseData(body);
        cb(null, data)
      } else {
        var error = new Error('Invalid url: ' + url);
        cb(error, null)
      }
    });
  }
}

module.exports = EplApi;
