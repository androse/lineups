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
        <Players players={this.props.lineUp.homeTeam.lineup.players} home={true} />
        <Players players={this.props.lineUp.awayTeam.lineup.players} home={false} />
      </Pitch>
    );
  }
});

module.exports = LineUp;
