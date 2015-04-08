/*jshint esnext:true, browserify:true, unused:true */
'use strict';

import timeago from 'timeago';
import React from 'react/addons';
import StylingUtil from './styling-util.jsx';

let PureRenderMixin = React.addons.PureRenderMixin;

let TimeAgo = React.createClass({
  mixins: [PureRenderMixin],
  propTypes: {
    dateTime: React.PropTypes.string.isRequired,
  },
  render() {
    let relativeTimestamp = timeago(this.props.dateTime);
    // Clone the CSS styles and set any state-dependent property
    let styles = Object.assign({}, this.constructor.styles);

    return (
      <time dateTime={this.props.dateTime} style={styles}>
        { relativeTimestamp && `updated ${relativeTimestamp}` }
      </time>
    );
  }
});

TimeAgo.styles = {
  color: "#999",
  fontWeight: 200,
  paddingLeft: StylingUtil.remCalc(8)
};

export default TimeAgo;
