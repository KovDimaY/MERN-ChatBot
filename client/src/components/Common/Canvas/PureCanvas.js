import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PureCanvas extends Component {
  shouldComponentUpdate() {
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
