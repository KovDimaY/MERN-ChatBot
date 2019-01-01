import React from 'react';

import EmptyView from '../../Common/EmptyView';
import LanguageItem from '../../Common/LanguageItem';
import HobbyItem from '../../Common/HobbyItem';
import { getAgeByBirthdate } from '../../../utils/common';
import { myProfilePicture } from '../../../images';
import {
  emptyViewDescription, aboutMeDescription,
  languages, hobbies,
} from './constants';

import './styles.css';

const Home = () => {
  const renderText = array => (
    array.map(item => <p key={item}>{item}</p>)
  );

  const renderLanguages = () => (
    languages.map(item => <LanguageItem {...item} key={item.id} />)
  );

  const renderHobbies = () => (
    hobbies.map(item => <HobbyItem {...item} key={item.id} />)
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
        {renderText(aboutMeDescription)}
      </div>

      <div className="languages-section section">
        <h3 className="section-title">Languages I speak:</h3>
        <div className="languages-wrapper">
          {renderLanguages()}
        </div>
      </div>

      <div className="hobbies-section section">
        <h3 className="section-title">My hobbies:</h3>
        <div className="hobbies-wrapper">
          {renderHobbies()}
        </div>
      </div>
    </React.Fragment>
  );

  return (
    <div className="home-page-container">
      {false && <EmptyView section="home">{renderText(emptyViewDescription)}</EmptyView>}
      {true && renderInfo()}
    </div>
  );
};

export default Home;
