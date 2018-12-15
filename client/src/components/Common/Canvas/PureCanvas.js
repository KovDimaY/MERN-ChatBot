import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PureCanvas extends Component {
  shouldComponentUpdate({ width, height }) {
    if (this.props.width !== width || this.props.height !== height) {
      return true;
    }
    return false;
  }

  getRef = (node) => {
    if (node) {
      this.props.contextRef(node.getContext('2d'));
    }

    return null;
  }

  render() {
    const { width, height } = this.props;

    return (
      <canvas className="pure-canvas" width={width} height={height} ref={this.getRef} />
    );
  }
}

PureCanvas.propTypes = {
  contextRef: PropTypes.func.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

export default PureCanvas;
