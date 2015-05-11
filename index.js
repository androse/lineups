// add more custom features availabe through params

// dimension param(s) in api url
// use to set width and height

// use react to render svg
// React.renderToString
require("node-jsx").install();

var http = require('http'),
  React = require('react'),
  lineUpData = require('./app/lib/line_up_data'),
  LineUp = React.createFactory(require('./app/view_components/line_up'));

http.createServer(function(req, res) {
  if (req.url == '/') {
    lineUpData.get(2014, 35, 755646, function(err, data) {
      if (err) {
        console.log(err);
      } else {
        // serve svg
        res.setHeader('Content-Type', 'image/svg+xml');
        var svg = formatSVG(React.renderToStaticMarkup(LineUp({lineUp: data})));
        res.end(svg)
      }
    });
  }
}).listen(3000, function(err) {
  if (err) throw err;
  console.log('Listening on port 3000...');
});

// React doesn't like xml attributes so add them here
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
