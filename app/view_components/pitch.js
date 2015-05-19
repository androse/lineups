/** @jsx React.DOM */
var React = require('react');

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

module.exports = Pitch;
