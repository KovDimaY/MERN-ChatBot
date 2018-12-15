import React, { Component } from 'react';
import debounce from 'lodash.debounce';

import Animation from '../Common/DotsAnimation';

import './styles.css';

class Disclaimer extends Component {
  state = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  componentDidMount() {
    window.addEventListener('resize', debounce(this.updateDimentions, 500));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', debounce(this.updateDimentions, 500));
  }

  updateDimentions = () => {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  render() {
    const { width, height } = this.state;

    return (
      <div className="discalimer-container">
        This is DISCLAIMER

        <Animation width={width} height={height} />
      </div>
    );
  }
}

export default Disclaimer;
