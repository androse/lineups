/** @jsx React.DOM */
var React = require('react');

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
  //     x="0px" y="0px" width="612px"
	//  height="792px" viewBox="0 0 612 792"
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

var LineUp = React.createClass({
  // add prop validation
  render: function() {
    return (
      <Pitch>
        <rect height="50" width="100" x="25" y="25" />
      </Pitch>
    );
  }
});

module.exports = LineUp;


// <?xml version="1.0" encoding="utf-8"?>
// <!-- Generator: Adobe Illustrator 16.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
// <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
// <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="612px"
// 	 height="792px" viewBox="0 0 612 792" style="enable-background:new 0 0 612 792;" xml:space="preserve">
// <style type="text/css">
// <![CDATA[
// 	.st0{fill:none;stroke:#FFFFFF;stroke-width:7;stroke-miterlimit:10;}
// 	.st1{fill:#B4DDC5;}
// 	.st2{fill:#FFFFFF;}
// 	.st3{display:inline;fill:#FFFFFF;stroke:#2B3990;stroke-width:8;stroke-miterlimit:10;}
// 	.st4{display:none;}
// ]]>
// </style>
// <g id="Layer_1">
// 	<g>
// 		<rect x="3.5" y="3.5" class="st1" width="605" height="785"/>
// 		<path class="st2" d="M605,7v778H7V7H605 M612,0H0v792h612V0L612,0z"/>
// 	</g>
// 	<line class="st0" x1="0" y1="396" x2="612" y2="396"/>
// 	<circle class="st0" cx="306" cy="396" r="65"/>
// 	<path class="st0" d="M612,26c-14.4,0-26-11.6-26-26"/>
// 	<path class="st0" d="M0,26c14.4,0,26-11.6,26-26"/>
// 	<polyline class="st0" points="204,0.2 204,81.2 408,81.2 408,0.3 	"/>
// 	<path class="st0" d="M261.7,81.2C273.4,92,288.9,98.7,306,98.7c17.1,0,32.6-6.6,44.3-17.4"/>
// 	<polyline class="st0" points="272,0 272,20 340,20 340,0 	"/>
// 	<path class="st0" d="M612,764c-14.4,0-26,11.6-26,26"/>
// 	<path class="st0" d="M0,764c14.4,0,26,11.6,26,26"/>
// 	<polyline class="st0" points="204,789.8 204,708.8 408,708.8 408,789.7 	"/>
// 	<path class="st0" d="M261.7,708.8c11.6-10.8,27.2-17.4,44.3-17.4c17.1,0,32.6,6.6,44.3,17.4"/>
// 	<polyline class="st0" points="272,790 272,770 340,770 340,790 	"/>
// </g>
// <g id="Layer_2" class="st4">
// 	<g>
// 	</g>
// 	<circle class="st3" cx="306" cy="311" r="20.7"/>
// </g>
// </svg>
