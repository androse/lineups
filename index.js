// add more custom features availabe through params

// dimension param(s) in api url
// use to set width and height

// use react to render svg
// React.renderToString
require("node-jsx").install();

var http = require('http'),
  React = require('react'),
  LineUp = React.createFactory(require('./app/view_components/line_up'));

http.createServer(function(req, res) {
  // serve svg
  res.setHeader('Content-Type', 'image/svg+xml');

  var svg = formatSVG(React.renderToStaticMarkup(LineUp({})));

  res.end(svg)
}).listen(3000, function(err) {
  if (err) throw err;
  console.log('Listening on port 3000...');
});

function formatSVG(svgString) {
  var insertString = 'xmlns="http://www.w3.org/2000/svg" '
  var preString = '<svg '
  var index = svgString.indexOf(preString) + preString.length

  return(
    svgString.substring(0, index)
    + insertString
    + svgString.substring(index, svgString.length)
  )
};
