/** @jsx React.DOM */
var React = require('react');
var Pitch = require('./pitch');
var Players = require('./players');

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
