import React, { Component } from 'react';
import debounce from 'lodash.debounce';
import { Link } from 'react-router-dom';

import { HOME } from 'constants/routes';

import Animation from '../../Common/DotsAnimation';

import './styles.css';

class Disclaimer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  componentDidMount() {
    this.mounted = true;
    window.addEventListener('resize', debounce(this.updateDimentions, 500));
  }

  componentWillUnmount() {
    this.mounted = false;
    window.removeEventListener('resize', debounce(this.updateDimentions, 500));
  }

  updateDimentions = () => {
    if (this.mounted) {
      this.setState({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
  };

  render() {
    const { width, height } = this.state;

    return (
      <div className="discalimer-container">
        <Animation width={width} height={height} />
        <div className="title">Disclaimer</div>

        <div className="description">
          <p>
            I always was curious about AI and chatbots. Since a long time ago I
            wanted to know how they work and maybe even create one myself. So
            when I accidentally came across a course on
            <a
              href="https://www.udemy.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              {' Udemy '}
            </a>
            by
            <a
              href="https://www.udemy.com/user/jana-bergant/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {' Jana Bergant '}
            </a>
            I immediately realized that it is my chance to accomplish my old
            childhood dream. So I have finished the course and I liked it a lot!
            I definitelly recommend her courses to everyone who wants to learn
            about chatbots.
          </p>

          <p>
            Collecting all the knowledge I learned from the course, I came up
            with this project. I really hope you like it and, as always, I would
            be very happy to get some feedback from you! Have a nice time
            playing with it!
          </p>
        </div>

        <div className="gohome-button">
          <Link
            className="waves-effect waves-light btn-large red accent-2"
            to={HOME}
          >
            <i className="material-icons left">android</i>Go to ChatBot
          </Link>
        </div>
      </div>
    );
  }
}

export default Disclaimer;
