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
      <div className="basic-info-section">
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

      <div className="summary-section">
        <h3>About me:</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nunc turpis metus, lacinia dapibus ex non, ultricies ornare quam.
          Aliquam erat volutpat. Morbi convallis, purus ut vehicula rhoncus,
          mauris magna condimentum mauris, eget facilisis eros nulla sed justo.
          Aliquam fermentum eros ut tortor gravida finibus.
        </p>
      </div>

      <div className="languages-section">
        <h3>Languages I speak:</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nunc turpis metus, lacinia dapibus ex non, ultricies ornare quam.
          Aliquam erat volutpat. Morbi convallis, purus ut vehicula rhoncus,
          mauris magna condimentum mauris, eget facilisis eros nulla sed justo.
          Aliquam fermentum eros ut tortor gravida finibus.
        </p>
      </div>

      <div className="hobbies-section">
        <h3>My hobbies:</h3>
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
