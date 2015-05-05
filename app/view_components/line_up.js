/** @jsx React.DOM */
var React = require('react');

var Pitch = React.createClass({
  render: function() {
    return (
      <svg height={this.props.height} width={this.props.width} >
          {this.props.children}
      </svg>
    );
  }
});

var LineUp = React.createClass({
  // add prop validation
  render: function() {
    return (
      <Pitch height="100" width="200">
        <rect height="50" width="100" x="25" y="25" />
      </Pitch>
    );
  }
});

module.exports = LineUp;
