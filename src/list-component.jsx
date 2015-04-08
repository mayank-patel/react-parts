/*jshint esnext:true, browserify:true, unused:true */
'use strict';

import React from 'react/addons';
import StylingUtil from './styling-util.jsx';
import ComponentItem from './item-component.jsx';

let PureRenderMixin = React.addons.PureRenderMixin;

let NoComponents = React.createClass({
  mixins: [PureRenderMixin],
  render() {
    // Clone the CSS styles and set any state-dependent property
    let styles = Object.assign({}, this.constructor.styles);

    return (
      <div style={styles.container}>
        <p style={styles.message}>No components found.</p>
      </div>
    );
  }
});

NoComponents.styles = {
  container: {
    background: "#fff",
    boxShadow: "0 1px 2px rgba(0,0,0,.2)",
    margin: 1,
    padding: StylingUtil.remCalc(15, 20),
    color: "#999",
  },
  message: {
    width: "100%",
    textAlign: "center",
  }
};

let ComponentList = React.createClass({
  mixins: [PureRenderMixin],
  propTypes: {
    components: React.PropTypes.array.isRequired
  },
  render() {
    // Clone the CSS styles and set any state-dependent property
    let styles = Object.assign({}, this.constructor.styles);

    let components = this.props.components.map(function(item, index) {
      return (
        <li key={index}>
          <ComponentItem {...item} />
        </li>
      );
    });

    if (components.length === 0) {
      return (
        <NoComponents />
      );
    }

    return (
      <ul style={styles}>
        {components}
      </ul>
    );
  }
});

ComponentList.styles = {
  listStyle: "none",
  margin: 0,
  padding: 0
};

export default ComponentList;
