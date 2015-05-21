/** @jsx React.DOM */
var React = require('react');
var Pitch = require('./pitch');
var Players = require('./players');
var Description = require('./description');

var LineUp = React.createClass({
  propTypes: {
    lineUp: React.PropTypes.object.isRequired
  },

  render: function() {
    return (
      <Pitch>
        <Description name={this.props.lineUp.homeTeam.info.name} home={true} />
        <Description name={this.props.lineUp.awayTeam.info.name} home={false} />
        <Players players={this.props.lineUp.homeTeam.lineup.players} home={true} />
        <Players players={this.props.lineUp.awayTeam.lineup.players} home={false} />
      </Pitch>
    );
  }
});

module.exports = LineUp;
