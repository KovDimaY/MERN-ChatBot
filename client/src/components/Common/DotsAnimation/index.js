import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Canvas from '../Canvas';

/**
 * This component is used as a background on the initial page of the project.
 * It is resize sensitive so when the user resizes the window,
 * points recalculate their positions (using props as params).
 * Also, to create more interactivity, it was added the mousemove listener
 * that is working as a one more dot to connect with the other ones.
 * Due to the way how styleguide is implemented, the mouse position is not detected
 * correctly but with the offset of the margin of the container.
 * In the normal conditions it is working correctly.
 */
class DotsAnimation extends Component {
  constructor(props) {
    super(props);

    this.dotsCount = this.getOptimalNumberOfDots(props.width);
    this.radius = 3;
    this.maxSpeed = 50;
    this.minMouseDistance = 150;
    this.FPS = 60;
    this.color = 'white';

    const dots = [];

    for (let i = 0; i < this.dotsCount; i += 1) {
      dots.push({
        x: Math.random() * props.width,
        y: Math.random() * props.height,
        radius: Math.random() * this.radius + 1,
        vx: Math.floor(Math.random() * this.maxSpeed * 2) - this.maxSpeed,
        vy: Math.floor(Math.random() * this.maxSpeed * 2) - this.maxSpeed,
      });
    }

    this.state = {
      mouse: { x: 0, y: 0 },
      dots,
    };
  }

  componentDidMount() {
    this.rAF = requestAnimationFrame(this.updateAnimationState);

    document.addEventListener('mousemove', this.handleMouseMove);
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.rAF);

    document.removeEventListener('mousemove', this.handleMouseMove);
  }

  getOptimalNumberOfDots = width => {
    if (width < 500) {
      return 50;
    } else if (width < 1200) {
      return 100;
    }
    return 150;
  };

  distance = (a, b) => {
    const xs = b.x - a.x;
    const ys = b.y - a.y;

    return Math.sqrt(xs * xs + ys * ys);
  };

  updateAnimationState = () => {
    const { dots } = this.state;
    const { width, height } = this.props;

    const newDots = dots.map(dot => {
      const newX = dot.x + dot.vx / this.FPS;
      const newY = dot.y + dot.vy / this.FPS;

      return {
        ...dot,
        x: newX > width ? width : newX,
        y: newY > height ? height : newY,
        vx: newX < 0 || newX > width ? -dot.vx : dot.vx,
        vy: newY < 0 || newY > height ? -dot.vy : dot.vy,
      };
    });

    this.setState({ dots: newDots });
    this.rAF = requestAnimationFrame(this.updateAnimationState);
  };

  handleMouseMove = event => {
    this.setState({
      mouse: {
        x: event.clientX,
        y: event.clientY,
      },
    });
  };

  handleDraw = ctx => {
    const { dots, mouse } = this.state;
    const { width, height } = this.props;

    ctx.clearRect(0, 0, width, height);
    ctx.globalCompositeOperation = 'lighter';

    dots.forEach(dot => {
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(dot.x, dot.y, dot.radius, 0, 2 * Math.PI);
      ctx.fill();
      ctx.fillStyle = 'black';
      ctx.stroke();
    });

    ctx.beginPath();

    dots.forEach(dot1 => {
      ctx.moveTo(dot1.x, dot1.y);
      if (this.distance(mouse, dot1) < this.minMouseDistance) {
        ctx.lineTo(mouse.x, mouse.y);
      }

      dots.forEach(dot2 => {
        if (this.distance(dot1, dot2) < this.minMouseDistance) {
          ctx.lineTo(dot2.x, dot2.y);
        }
      });
    });

    ctx.lineWidth = 0.05;
    ctx.strokeStyle = this.color;
    ctx.stroke();
  };

  render() {
    const { width, height } = this.props;

    return <Canvas draw={this.handleDraw} width={width} height={height} />;
  }
}

DotsAnimation.propTypes = {
  /** Width in pixels of the container with the dots animation. */
  width: PropTypes.number.isRequired,
  /** Height in pixels of the container with the dots animation. */
  height: PropTypes.number.isRequired,
};

export default DotsAnimation;
