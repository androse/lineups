/** @jsx React.DOM */
var React = require('react');
var Pitch = require('./pitch');

const PITCH_WIDTH = 612;
const PITCH_HEIGHT = 792;

var LineUpError = React.createClass({
  render: function() {
    var textStyle = {
      textAnchor: 'middle',
      fontFamily: 'Futura, Verdana, Arial, sans-serif',
      fontSize: 24
    };

    var x = PITCH_WIDTH / 2;
    var y = (PITCH_HEIGHT / 4) + textStyle.fontSize;

    return (
      <Pitch>
        <text x={x} y={y} {...textStyle}>
          {this.props.text}
        </text>
      </Pitch>
    );
  }
});

module.exports = LineUpError;
