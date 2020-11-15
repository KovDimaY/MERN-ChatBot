import React from 'react';
import PropTypes from 'prop-types';

/* eslint-disable react/no-unused-prop-types */

import { getAgeByBirthdate, showHiddenText } from 'utils/common';
import { myProfilePicture } from 'images';
import { aboutMeDescription, languages, hobbies } from './constants';

import EmptyView from '../../Common/EmptyView';
import LanguageItem from '../../Common/LanguageItem';
import HobbyItem from '../../Common/HobbyItem';
import ProgressBar from '../../Common/ProgressBar';

import './styles.css';

const Home = props => {
  const renderText = (array, show = true) =>
    array.map(item => <p key={item}>{showHiddenText(item, show)}</p>);

  const renderLanguages = () =>
    languages.map(item => <LanguageItem {...item} key={item.id} discovered={props.languages} />);

  const renderHobbies = () =>
    hobbies.map(item => (
      <HobbyItem
        {...item}
        key={item.id}
        discovered={props.hobbies.discovered}
        discoveredDetails={props.hobbies[item.storageName]}
      />
    ));

  const renderName = () => {
    if (props.name) {
      return 'Dmytro Kovalenko';
    }

    return (
      <React.Fragment>
        <strong>Name: </strong> {showHiddenText('Dmytro', false)}
      </React.Fragment>
    );
  };

  const renderPosition = () => {
    if (props.position) {
      return 'Full Stack JS Developer';
    }

    return (
      <React.Fragment>
        <strong>Profession: </strong> {showHiddenText('JS Developer', false)}
      </React.Fragment>
    );
  };

  const renderLocation = () => {
    if (props.location) {
      return (
        <a
          href="https://www.google.es/maps?q=41.382207,2.140318"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sants Estació, Barcelona, Spain
        </a>
      );
    }

    return (
      <React.Fragment>
        <strong>Location: </strong> {showHiddenText('Sants Estacio, Barcelona', false)}
      </React.Fragment>
    );
  };

  const renderContactInfo = () => {
    if (props.contacts) {
      return (
        <React.Fragment>
          Contact me in&nbsp;
          <a
            href="https://www.linkedin.com/in/kovalenkodmytro/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </React.Fragment>
      );
    }

    return showHiddenText('Contact me in LinkedIn', false);
  };

  const renderBasicInfo = () => (
    <div className="basic-info-section section row">
      <div className="left-column col s12 m6">
        <img src={myProfilePicture} alt="Me" className="my-profile-photo" />
      </div>
      <div className="right-column col s12 m6">
        <h4 className="name-lastname">{renderName()}</h4>
        <p className="job-title">{renderPosition()}</p>
        <p className="location">{renderLocation()}</p>
        <p>
          <strong>Contact info: </strong>
          {renderContactInfo()}
        </p>
        <p>
          <strong>Age: </strong>
          {showHiddenText(`${getAgeByBirthdate('1992-05-20')} years old`, props.age)}
        </p>
        <p>
          <strong>Nationality: </strong>
          {showHiddenText('Ukraine', props.nationality)}
        </p>
      </div>
    </div>
  );

  const renderInfo = () => (
    <React.Fragment>
      <ProgressBar percent={props.discoveryPercent} />
      {renderBasicInfo()}

      <div className="summary-section section">
        <h3 className="section-title">About me:</h3>
        {renderText(aboutMeDescription, props.aboutMe)}
      </div>

      <div className="languages-section section">
        <h3 className="section-title">Languages I speak:</h3>
        <div className="languages-wrapper row">{renderLanguages()}</div>
      </div>

      <div className="hobbies-section section">
        <h3 className="section-title">My hobbies:</h3>
        <div className="hobbies-wrapper">{renderHobbies()}</div>
      </div>
    </React.Fragment>
  );

  const renderEmptyView = () => (
    <EmptyView section="home">
      <p>Welcome to my new personal project!</p>
      <p>
        Ask questions as you are speaking to me and try to populate the website with the info my bot
        will provide. Every page will have a progress bar which indicates how much info you have
        already recovered - so you will know where to stop asking about some particular topic.
      </p>
      <p>
        For example, <b>&quot;What is your name?&quot;</b> sounds like a good question to start, but
        it can be something else too, just use your imagination ;)
      </p>
    </EmptyView>
  );

  return (
    <div className="home-page-container">{props.discovered ? renderInfo() : renderEmptyView()}</div>
  );
};

Home.propTypes = {
  discovered: PropTypes.bool.isRequired,
  name: PropTypes.bool.isRequired,
  position: PropTypes.bool.isRequired,
  location: PropTypes.bool.isRequired,
  contacts: PropTypes.bool.isRequired,
  age: PropTypes.bool.isRequired,
  nationality: PropTypes.bool.isRequired,
  aboutMe: PropTypes.bool.isRequired,
  languages: PropTypes.bool.isRequired,
  hobbies: PropTypes.object.isRequired,
  discoveryPercent: PropTypes.number.isRequired,
};

export default Home;
