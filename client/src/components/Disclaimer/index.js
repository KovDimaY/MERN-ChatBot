import React, { Component } from 'react';
import debounce from 'lodash.debounce';
import { Link } from 'react-router-dom';

import Animation from '../Common/DotsAnimation';
import { HOME } from '../../constants/routes';

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
        <Animation width={width} height={height} />
        <div className="title">
          Disclaimer
        </div>

        <div className="description">
          <p>
            This project was created just because I was always curious about
            how ChatBots are built and how they work from inside. Taking a course
            on
            <a href="https://www.udemy.com" target="_blank" rel="noopener noreferrer">
              {' Udemy '}
            </a>
            by
            <a href="https://www.udemy.com/user/jana-bergant/" target="_blank" rel="noopener noreferrer">
              {' Jana Bergant '}
            </a>
            I have learned many different functionalities
            and I definitelly recommend her courses if you want to learn about chatbots.
            Almost all the functionalities were focused on
            selling or describing things and
            as I have nothing to sell but still I wanted to practice all the
            functionalities, I decided that it would be meaningfull and interesting to
            make an interactive CV. In the end it is quite similar to selling
            - is like I am selling myself. This is how I came up with this project.
          </p>

          <p>
            So, just to clarify, it is a personal project to learn and practice new skills.
            I feel pretty happy at my current job and I am not looking for a change.
          </p>

          <p className="post-scriptum">
            PS: As always, I would be happy to get a feedback
            which could help me to improve. Thank you in advance!
          </p>
        </div>

        <div className="gohome-button">
          <Link className="waves-effect waves-light btn-large red accent-2" to={HOME}><i className="material-icons left">android</i>Go to ChatBot</Link>
        </div>
      </div>
    );
  }
}

export default Disclaimer;
