// add more custom features availabe through params

// dimension param(s) in api url
// use to set width and height
require("node-jsx").install();
var lineUpData = require('./line_up_data');
var React = require('react');
var LineUp = React.createFactory(require('../view_components/line_up'));

function urlMatch(url, matches) {
  var params = parseUrl(url);
  var match = matches.findByTeams(params.home, params.away);
  match.yearId = params.year;

  return match;
}

function parseUrl(url) {
  return {
    year: parseInt(url.slice(0, 4)),
    home: url.slice(4, 7).toLowerCase(),
    away: url.slice(7, 10).toLowerCase()
  };
}

function sanitizeUrl(url) {
  return url.replace(/\//g, '');
}

function validUrl(url) {
  var validReg = /\d{4}[a-zA-Z]{6}/
  return validReg.test(url);
}

function renderSVG(res, data) {
  res.setHeader('Content-Type', 'image/svg+xml');
  var svg = formatSVG(React.renderToStaticMarkup(LineUp({lineUp: data})));
  res.end(svg)
}

// React doesn't like xml attributes so add them here
function formatSVG(svgString) {
  var insertString = 'xmlns="http://www.w3.org/2000/svg" '
  var preString = '<svg '
  var index = svgString.indexOf(preString) + preString.length

  return (
    svgString.substring(0, index)
    + insertString
    + svgString.substring(index, svgString.length)
  )
}

function controller(req, res, matches) {
  var url = sanitizeUrl(req.url);

  if (validUrl(url)) {
    var match = urlMatch(url, matches);

    lineUpData.get(match.yearId, match.weekId, match.id, function(err, data) {
      if (err) {
        console.log(err);
      } else {
        renderSVG(res, data);
      }
    });
  }
}

module.exports = controller;
