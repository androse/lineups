/** @jsx React.DOM */
var React = require('react');

const PITCH_WIDTH = 612;
const PITCH_HEIGHT = 792;

var Description = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    home: React.PropTypes.bool.isRequired
  },

  render: function() {
    var textPaddingTop = 5;
    var textPaddingLeft = 10;
    var textStyle = {
      fontFamily: 'Futura, Verdana, Arial, sans-serif',
      fontSize: 24
    };

    var x = textPaddingLeft;
    var y = textPaddingTop + textStyle.fontSize;
    if (!this.props.home) y += (PITCH_HEIGHT / 2);

    return (
      <text x={x} y ={y} {...textStyle}>
        {this.props.name}
      </text>
    )
  }
});

module.exports = Description;
