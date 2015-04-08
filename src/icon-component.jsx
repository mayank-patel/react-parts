/*jshint esnext:true, browserify:true, unused:true */
'use strict';

import React from 'react/addons';
import StylingUtil from './styling-util.jsx';

let PureRenderMixin = React.addons.PureRenderMixin;

/*
 * Subset of the SVG icon collection from GitHub
 */
let Icon = React.createClass({
  mixins: [PureRenderMixin],
  propTypes: {
    icon: React.PropTypes.string.isRequired,
    size: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number
    ]),
    style: React.PropTypes.object
  },
  getDefaultProps() {
    return {
      size: "1em"
    };
  },
  renderGraphic() {
    switch (this.props.icon) {
      case 'cloud-download':
        return (
          <g><path d="M832 320c-8.75 0-17.125 1.406-25.625 2.562C757.625 208.25
            644.125 128 512 128c-132.156 0-245.562 80.25-294.406 194.562C209.156
            321.406 200.781 320 192 320 85.938 320 0 405.938 0 512s85.938 192 192
            192c20.531 0 39.875-4.25 58.375-10.375C284.469 731.375 331.312 756.75
            384 764.5v-65.25c-49.844-10.375-91.594-42.812-112.625-87.875C249.531
            629 222.219 640 192 640c-70.656 0-128-57.375-128-128 0-70.656 57.344-128
            128-128 25.281 0 48.625 7.562 68.406 20.094C281.344 283.78099999999995
            385.594 192 512 192c126.5 0 229.75 92.219 250.5 212.75 20-13 43.875-20.75
            69.5-20.75 70.625 0 128 57.344 128 128 0 70.625-57.375 128-128 128-10.25
            0-20-1.5-29.625-3.75C773.438 677.125 725.938 704 672 704c-11.062
            0-21.625-1.625-32-4v64.938c10.438 1.688 21.062 3.062 32 3.062 61.188 0
            116.5-24.625 156.938-64.438C830 703.625 830.875 704 832 704c106.062 0
            192-85.938 192-192S938.062 320 832 320zM576 512H448v320H320l192 192
            192-192H576V512z"/></g>
        );
      case 'stars':
        return (
          <g><path d="M896 384l-313.5-40.781L448 64 313.469 343.219 0 384l230.469
            208.875L171 895.938l277-148.812 277.062 148.812L665.5 592.875 896 384z"/></g>
        );
      case 'versions':
        return (
          <g><path d="M0 704h128v-64H64V384h64v-64H0V704zM384 192v640h512V192H384zM768
            704H512V320h256V704zM192 768h128v-64h-64V320h64v-64H192V768z"/></g>
        );
    }
  },
  render() {
    let styles = {
      fill: "currentcolor",
      margin: "0 .2em 0 .1em",
      verticalAlign: "-0.05em",
      width: this.props.size, // CSS instead of the width attr to support non-pixel units
      height: this.props.size
    };
    return (
      <svg viewBox="0 0 1024 896" preserveAspectRatio="xMidYMid meet" fit
        style={StylingUtil.mergeStyles(
          styles,
          this.props.style // This lets the parent pass custom styles
        )}>
          {this.renderGraphic()}
      </svg>
    );
  }
});

export default Icon;
