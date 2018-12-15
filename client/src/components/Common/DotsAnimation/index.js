import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Canvas from '../Canvas';

class DotsAnimation extends Component {
  constructor(props) {
    super(props);

    this.dotsCount = 100;
    this.radius = 3;
    this.maxSpeed = 25;
    this.minMouseDistance = 150;
    this.FPS = 60;

    const dots = [];

    for (let i = 0; i < this.dotsCount; i += 1) {
      dots.push({
        x: Math.random() * props.width,
        y: Math.random() * props.height,
        radius: (Math.random() * this.radius) + 1,
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

    if (this.animation) {
      this.animation.ctx.canvas.addEventListener('mousemove', this.handleMouseMove);
    }
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.rAF);

    if (this.animation) {
      this.animation.ctx.canvas.removeEventListener('mousemove', this.handleMouseMove);
    }
  }

  distance = (a, b) => {
    const xs = b.x - a.x;
    const ys = b.y - a.y;

    return Math.sqrt((xs * xs) + (ys * ys));
  }

  updateAnimationState = () => {
    const { dots } = this.state;
    const { width, height } = this.props;

    const newDots = dots.map((dot) => {
      const newX = dot.x + (dot.vx / this.FPS);
      const newY = dot.y + (dot.vy / this.FPS);

      return {
        ...dot,
        x: newX,
        y: newY,
        vx: (newX < 0 || newX > width) ? -dot.vx : dot.vx,
        vy: (newY < 0 || newY > height) ? -dot.vy : dot.vy,
      };
    });

    this.setState({ dots: newDots });
    this.rAF = requestAnimationFrame(this.updateAnimationState);
  }

  handleMouseMove = (event) => {
    this.setState({
      mouse: {
        x: event.clientX,
        y: event.clientY,
      },
    });
  }

  handleDraw = (ctx) => {
    const { dots, mouse } = this.state;
    const { width, height } = this.props;

    ctx.clearRect(0, 0, width, height);
    ctx.globalCompositeOperation = 'lighter';

    dots.forEach((dot) => {
      ctx.fillStyle = '#fff';
      ctx.beginPath();
      ctx.arc(dot.x, dot.y, dot.radius, 0, 2 * Math.PI);
      ctx.fill();
      ctx.fillStyle = 'black';
      ctx.stroke();
    });

    ctx.beginPath();

    dots.forEach((dot1) => {
      ctx.moveTo(dot1.x, dot1.y);
      if (this.distance(mouse, dot1) < this.minMouseDistance) {
        ctx.lineTo(mouse.x, mouse.y);
      }

      dots.forEach((dot2) => {
        if (this.distance(dot1, dot2) < this.minMouseDistance) {
          ctx.lineTo(dot2.x, dot2.y);
        }
      });
    });

    ctx.lineWidth = 0.05;
    ctx.strokeStyle = 'white';
    ctx.stroke();
  }

  render() {
    const { width, height } = this.props;

    return (
      <Canvas
        draw={this.handleDraw}
        width={width}
        height={height}
        ref={(element) => { this.animation = element; }}
      />
    );
  }
}

DotsAnimation.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

export default DotsAnimation;
