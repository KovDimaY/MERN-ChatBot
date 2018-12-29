import React from 'react';

import EmptyView from '../../Common/EmptyView';
import { getAgeByBirthdate } from '../../../utils/common';
import { myProfilePicture } from '../../../images';

import './styles.css';

const Home = () => {
  const renderDescription = () => (
    <React.Fragment>
      <p>
        Welcome to my new personal project!!!
      </p>

      <p>
        Ask questions as you are speaking to me and try to populate
        the website with the info he will provide.
      </p>

      <p>
        Every page will have a progress bar which indicates
        how much info you have already recovered - so you will know
        where to stop asking about some particular topic.
      </p>

      <p>
        One more time, this project was created to learn about Chatbots
        and to practice my full stack skills. I am happy at my current job and
        I am not looking for a change.
      </p>
    </React.Fragment>
  );

  const renderInfo = () => (
    <React.Fragment>
      <div className="basic-info-section section">
        <div className="left-column">
          <img src={myProfilePicture} alt="Me" className="my-profile-photo" />
        </div>
        <div className="right-column">
          <h4 className="name-lastname">Dmytro Kovalenko</h4>
          <p className="job-title">Full Stack JS Developer</p>
          <p className="location">
            <a href="https://www.google.es/maps?q=41.382207,2.140318" target="_blank" rel="noopener noreferrer">
              Sants Estació, Barcelona, Spain
            </a>
          </p>
          <p>
            <strong>Contact info: </strong>
            Contact me in
            {' '}
            <a href="https://www.linkedin.com/in/kovalenkodmytro/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </p>
          <p><strong>Age: </strong>{getAgeByBirthdate('1992-05-20')} years old</p>
          <p><strong>Civil status: </strong>Married, no children</p>
        </div>
      </div>

      <div className="summary-section section">
        <h3 className="section-title">About me:</h3>
        <p>
          I am a very passionate software developer with a mathematical
          background who has tried working with many different languages
          including Pascal, FORTRAN, Python, C/C++, C#, Java and Javascript.
          Now I am focused on web development
          with <strong>Node</strong> and <strong>React</strong> and I love it!
        </p>
        <p>
          I am a very methodological and disciplined person,
          I like when things are done in time and with the best
          possible quality. I love test coverage, CI and strict
          ESLint rules but also I like to experiment and to try
          new approaches when I see that something could be improved.
          I am very hardworking and a bit crazy about learning - I
          cannot imagine my life without Coursera, Udemy and GitHub.
        </p>
        <p>
          I believe in productive teamwork and I consider myself a good team
          player who can have fun and support others but also to be strict and
          demanding when needed. I am always trying to find something positive
          to keep an optimistic attitude and to be happy. I use sport and photography
          when I need to distract and relax.
        </p>
      </div>

      <div className="languages-section section">
        <h3 className="section-title">Languages I speak:</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nunc turpis metus, lacinia dapibus ex non, ultricies ornare quam.
          Aliquam erat volutpat. Morbi convallis, purus ut vehicula rhoncus,
          mauris magna condimentum mauris, eget facilisis eros nulla sed justo.
          Aliquam fermentum eros ut tortor gravida finibus.
        </p>
      </div>

      <div className="hobbies-section section">
        <h3 className="section-title">My hobbies:</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nunc turpis metus, lacinia dapibus ex non, ultricies ornare quam.
          Aliquam erat volutpat. Morbi convallis, purus ut vehicula rhoncus,
          mauris magna condimentum mauris, eget facilisis eros nulla sed justo.
          Aliquam fermentum eros ut tortor gravida finibus.
        </p>
      </div>
    </React.Fragment>
  );

  return (
    <div className="home-page-container">
      {false && <EmptyView section="home">{renderDescription()}</EmptyView>}
      {true && renderInfo()}
    </div>
  );
};

export default Home;
