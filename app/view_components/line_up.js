/** @jsx React.DOM */
var React = require('react');

const PITCH_WIDTH = 612;
const PITCH_HEIGHT = 792;

// allow user to set any size, fill background with color of choice or default (transparent)

var Pitch = React.createClass({
  render: function() {
    var lineStyle = {
      fill: 'none',
      stroke: '#FFFFFF',
      strokeWidth: '7',
      strokeMiterlimit: '10'
    };

    var grassStyle = {
      fill: '#B4DDC5',
      stroke: '#FFFFFF',
      strokeWidth: '7',
      strokeMiterlimit: '10'
    }

    return (
      <svg height="792" width="612" viewBox="0 0 612 792">
          <rect x="3.5" y="3.5" width="605" height="785" {...grassStyle} />
          <line x1="0" y1="396" x2="612" y2="396"{...lineStyle} />
        	<circle cx="306" cy="396" r="65" {...lineStyle} />
        	<path d="M612,26c-14.4,0-26-11.6-26-26" {...lineStyle} />
        	<path d="M0,26c14.4,0,26-11.6,26-26" {...lineStyle} />
        	<polyline points="204,0.2 204,81.2 408,81.2 408,0.3" {...lineStyle} />
        	<path d="M261.7,81.2C273.4,92,288.9,98.7,306,98.7c17.1,0,32.6-6.6,44.3-17.4" {...lineStyle} />
        	<polyline points="272,0 272,20 340,20 340,0" {...lineStyle} />
        	<path d="M612,764c-14.4,0-26,11.6-26,26" {...lineStyle} />
        	<path d="M0,764c14.4,0,26,11.6,26,26" {...lineStyle} />
        	<polyline points="204,789.8 204,708.8 408,708.8 408,789.7" {...lineStyle} />
        	<path d="M261.7,708.8c11.6-10.8,27.2-17.4,44.3-17.4c17.1,0,32.6,6.6,44.3,17.4" {...lineStyle} />
        	<polyline points="272,790 272,770 340,770 340,790" {...lineStyle} />
          {this.props.children}
      </svg>
    );
  }
});

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

var LineUp = React.createClass({
  propTypes: {
    lineUp: React.PropTypes.object.isRequired
  },

  render: function() {
    return (
      <Pitch>
        <Players players={this.props.lineUp.HomeTeam.Lineup.Players} home={true} />
        <Players players={this.props.lineUp.AwayTeam.Lineup.Players} home={false} />
      </Pitch>
    );
  }
});

module.exports = LineUp;
