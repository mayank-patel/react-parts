/*jshint esnext:true, browserify:true, unused:true */
'use strict';

import React from 'react/addons';
import StylingUtil from './styling-util.jsx';

let PureRenderMixin = React.addons.PureRenderMixin;

let NavBar = React.createClass({
  mixins: [PureRenderMixin],
  propTypes: {
    title: React.PropTypes.string.isRequired,
    height: React.PropTypes.string.isRequired,
    onSearch: React.PropTypes.func
  },
  getDefaultProps() {
    return {
      onSearch() {}
    };
  },
  render() {
    // Clone the CSS styles and set any state-dependent property
    let styles = Object.assign({}, this.constructor.styles);
    styles.container.height = this.props.height;
    styles.titleArea.lineHeight = this.props.height;

    return (
      <div className="NavBar" style={styles.container}>
        <div style={styles.titleArea}>
          <img style={styles.logo} src="/logo.svg" alt="Logo" draggable="false" />
          <a href="/" style={styles.title}>{this.props.title}</a>
        </div>
        <div style={styles.center}>
          <input
            ref="search"
            style={styles.search}
            type="text"
            placeholder="Search"
            onKeyUp={this.handleKeyUp}
          />
        </div>
        <a href="/submit" style={styles.link}>
          Submit a component
        </a>
      </div>
    );
  },
  handleKeyUp() {
    var field = React.findDOMNode(this.refs.search);
    var value = field.value.trim();
    this.props.onSearch(value);
  }
});

NavBar.styles = {
  container: {
    alignItems: "center",
    background: "#05a5d1",
    boxShadow: "0 -8px 4px 10px rgba(0,0,0,.2)",
    boxSizing: "border-box",
    color: "#fff",
    display: "flex",
    //height: 0, // Overridden with component state
    padding: StylingUtil.remCalc(0, 20)
  },
  titleArea: {
    WebkitBoxFlex: 1,
    flex: 1,
    //lineHeight: 0, // Overridden with component state
    minWidth: StylingUtil.remCalc(180)
  },
  logo: {
    height: "1em",
    paddingRight: StylingUtil.remCalc(10),
    verticalAlign: "-0.05em",
    width: "1em"
  },
  title: {
    color: "#fff",
    fontSize: StylingUtil.remCalc(26),
    fontWeight: 600,
    textDecoration: "none"
  },
  center: {
    alignItems: "center",
    WebkitBoxFlex: 1,
    flex: 1,
    flexGrow: 4,
    justifyContent: "center",
    margin: StylingUtil.remCalc(10),
    maxWidth: StylingUtil.remCalc(800)
  },
  search: {
    background: "rgba(255,255,255, .15)",
    border: "none",
    borderRadius: "2px",
    boxSizing: "border-box",
    fontSize: StylingUtil.remCalc(16),
    outline: "none",
    padding: StylingUtil.remCalc(8, 10),
    width: "100%"
  },
  link: {
    color: "#fff",
    WebkitBoxFlex: 1,
    flex: 1,
    margin: StylingUtil.remCalc(12, 0),
    minWidth: StylingUtil.remCalc(180),
    display: "block",
    textAlign: "right",
    textDecoration: "none"
  }
};

export default NavBar;
