import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PureCanvas from './PureCanvas';

class Canvas extends Component {
  componentDidUpdate() {
    this.props.draw(this.ctx);
  }

  saveContext = (ctx) => {
    this.ctx = ctx;
  }

  render() {
    const { width, height } = this.props;

    return <PureCanvas contextRef={this.saveContext} width={width} height={height} />;
  }
}

Canvas.propTypes = {
  draw: PropTypes.func.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

export default Canvas;
