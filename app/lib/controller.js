// add more custom features availabe through params

// dimension param(s) in api url
// use to set width and height
require("node-jsx").install();
var React = require('react');
var LineUp = React.createFactory(require('../view_components/line_up'));
var LineUpError =
  React.createFactory(require('../view_components/line_up_error'));

function sanitizeUrl(url) {
  return url.replace(/\//g, '');
}

function validUrl(url) {
  var validReg = /\d{4}[a-zA-Z]{6}/
  return validReg.test(url);
}

function renderError(res, errorText) {
  var svg = React.renderToStaticMarkup(LineUpError({text: errorText}));
  renderSVG(res, svg);
}

function renderLineUp(res, data) {
  var svg = React.renderToStaticMarkup(LineUp({lineUp: data}))
  renderSVG(res, svg);
}

function renderSVG(res, svg) {
  res.setHeader('Content-Type', 'image/svg+xml');
  res.end(formatSVG(svg));
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

function controller(req, res, redisClient) {
  var url = sanitizeUrl(req.url);

  if (validUrl(url)) {
    redisClient.get(url, function(err, data) {
      if (data) {
        renderLineUp(res, JSON.parse(data));
      } else {
        var errorText = "Couldn't find the requested match, sorry 'bout that!";
        renderError(res, errorText);
      }
    });
  } else {
    var errorText = "Invalid URL, please correct it and try again!";
    renderError(res, errorText);
  }
}

module.exports = controller;
