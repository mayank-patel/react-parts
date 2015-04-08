/*jshint esnext:true, browserify:true, unused:true */
'use strict';

import React from 'react/addons';
import Router from 'react-router';
import StylingUtil from './styling-util.jsx';

let Link = Router.Link;

export let Tab = React.createClass({
  propTypes: {
    disabled: React.PropTypes.bool
  },
  getDefaultProps() {
    return {
      disabled: false
    };
  },
  render() {
    // Clone the CSS styles and set any state-dependent property
    let styles = Object.assign({}, this.constructor.styles);

    if (!this.props.disabled) {
      return (
        <Link
          {...this.props}
          style={styles.tab}
          activeStyle={StylingUtil.mergeStyles(
            styles.tab,
            styles.selectedTab
          )}>
            {this.props.children}
        </Link>
      );
    } else {
      return (
        <div style={StylingUtil.mergeStyles(
          styles.tab,
          styles.disabledTab
        )}>
          {this.props.children}
        </div>
      );
    }
  }
});

Tab.styles = {
  tab: {
    WebkitBoxFlex: 1,
    flex: 1,
    textAlign: "center",
    textTransform: "uppercase",
    letterSpacing: StylingUtil.remCalc(1),
    textDecoration: "none",
    color: "#828282",
    WebkitUserSelect: "none",
    MozUserSelect: "none",
    display: "block",
    padding: StylingUtil.remCalc(15, 20)
  },
  selectedTab: {
    background: "#fff",
    color: "#05a5d1"
  },
  disabledTab: {
    color: "#ccc"
  }
};


export let Tabs = React.createClass({
  render() {
    // Clone the CSS styles and set any state-dependent property
    let styles = Object.assign({}, this.constructor.styles);

    return (
      <div style={styles.container} className="Tabs">
        {this.props.children}
      </div>
    );
  }
});

Tabs.styles = {
  container: {
    background: "#f6f6f6",
    boxShadow: "0 1px 2px rgba(0,0,0,.2)",
    display: "flex",
    margin: 1
  },
};
