/** @jsx React.DOM */
var React = require('react');

const PITCH_WIDTH = 612;
const PITCH_HEIGHT = 792;

var Player = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    xPerc: React.PropTypes.number.isRequired,
    yPerc: React.PropTypes.number.isRequired,
    home: React.PropTypes.bool.isRequired
  },

  getDefaultProps: function() {
    return {
      primaryColor: '#000000',
      secondaryColor: '#ffffff'
    };
  },

  render: function() {
    var x, y;
    var radius = 10;
    var topPadding = 20;

    if (this.props.home) {
      x = this.props.xPerc * PITCH_WIDTH / 100;
      y = this.props.yPerc / 2 * PITCH_HEIGHT / 100;
    } else {
      x = (100 - this.props.xPerc) * PITCH_WIDTH / 100;
      y = (100 - this.props.yPerc / 2) * PITCH_HEIGHT / 100;
    }

    var circleStyle = {
      fill: this.props.primaryColor,
      stroke: this.props.secondaryColor,
      strokeWidth: '4'
    };

    var textStyle = {
      textAnchor: 'middle',
      fontFamily: 'Futura, Verdana, Arial, sans-serif',
      fontSize: '18'
    };
    var textX = x;
    var textY = y + radius + topPadding;
    var text = this.props.name;

    return (
      <g>
        <circle cx={x} cy={y} r={radius} {...circleStyle} />
        <text x={textX} y={textY} {...textStyle}>
          {text}
        </text>
      </g>
    )
  }
})

var Players = React.createClass({
  render: function() {
    var home = this.props.home;
    var players = this.props.players
      .filter(function(player){
        return player.StartingStatus === "Starter";
      }).map(function(player){
        return (
          <Player
            name={player.Name}
            number={player.BibNum}
            xPerc={player.LineupX}
            yPerc={player.LineupY}
            home={home} />
        )
      });

    return <g>{players}</g>
  }
});

module.exports = Players;
