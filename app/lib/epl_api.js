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
  return formatKeys(JSON.parse(data).Data);
}

// gets rid of unconventional capitalized keys
// eg: Id -> id
function formatKeys(object) {
  if (typeof object === 'object') {
    for (var key in object) {
      if (isNaN(key)) {
        var newKey = key.substr(0, 1).toLowerCase() + key.substr(1);
        object[newKey] = formatKeys(object[key]);
        delete object[key];
      } else {
        object[key] = formatKeys(object[key]);
      }
    }
  }

  return object;
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
