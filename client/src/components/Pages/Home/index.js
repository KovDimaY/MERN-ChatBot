import React from 'react';

import { getAgeByBirthdate, showHiddenText } from 'utils/common';
import { myProfilePicture } from 'images';
import {
  emptyViewDescription,
  aboutMeDescription,
  languages, hobbies,
} from './constants';

import EmptyView from '../../Common/EmptyView';
import LanguageItem from '../../Common/LanguageItem';
import HobbyItem from '../../Common/HobbyItem';

import './styles.css';

const temporaryState = {
  opened: true,
  name: false,
  position: false,
  location: false,
  contactInfo: false,
  age: false,
  nationality: false,
  aboutMe: false,
  languages: false,
  hobbies: {
    opened: false,
    programming: false,
    sports: false,
    puzzles: false,
    numismatics: false,
    photography: false,
  },
};

const Home = () => {
  const renderText = (array, show = true) => (
    show
      ? array.map(item => <p key={item}>{item}</p>)
      : showHiddenText(array[0], show)
  );

  const renderLanguages = () => (
    temporaryState.languages
      ? languages.map(item => <LanguageItem {...item} key={item.id} discovered />)
      : <LanguageItem {...languages[0]} key={languages[0].id} discovered={false} />
  );

  const renderHobbies = () => {
    if (temporaryState.hobbies.opened) {
      return hobbies.map(item => (
        <HobbyItem
          {...item}
          key={item.id}
          discovered
          discoveredDetails={temporaryState.hobbies[item.storageName]}
        />
      ))
    }

    return (
      <HobbyItem
        {...hobbies[0]}
        key={hobbies[0].id}
        discovered={false}
        discoveredDetails={false}
      />
    )
  };

  const renderName = () => {
    if (temporaryState.name) {
      return 'Dmytro Kovalenko';
    }

    return (
      <React.Fragment>
        <strong>Name: </strong> { showHiddenText('Dmytro', false) }
      </React.Fragment>
    );
  };

  const renderPosition = () => {
    if (temporaryState.position) {
      return 'Full Stack JS Developer';
    }

    return (
      <React.Fragment>
        <strong>Position: </strong> { showHiddenText('JS Developer', false) }
      </React.Fragment>
    );
  };

  const renderLocation = () => {
    if (temporaryState.location) {
      return (
        <a href="https://www.google.es/maps?q=41.382207,2.140318" target="_blank" rel="noopener noreferrer">
          Sants Estació, Barcelona, Spain
        </a>
      );
    }

    return (
      <React.Fragment>
        <strong>Location: </strong> { showHiddenText('Sants Estacio, Barcelona', false) }
      </React.Fragment>
    );
  };

  const renderContactInfo = () => {
    if (temporaryState.contactInfo) {
      return (
        <React.Fragment>
          Contact me in
          {' '}
          <a href="https://www.linkedin.com/in/kovalenkodmytro/" target="_blank" rel="noopener noreferrer">
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
        <h4 className="name-lastname">
          { renderName() }
        </h4>
        <p className="job-title">
          { renderPosition() }
        </p>
        <p className="location">
          { renderLocation() }
        </p>
        <p>
          <strong>Contact info: </strong>
          { renderContactInfo() }
        </p>
        <p><strong>Age: </strong>{ showHiddenText(`${getAgeByBirthdate('1992-05-20')} years old`, temporaryState.age) }</p>
        <p><strong>Nationality: </strong>{ showHiddenText('Ukraine', temporaryState.nationality) }</p>
      </div>
    </div>
  );

  const renderInfo = () => (
    <React.Fragment>
      {renderBasicInfo()}

      <div className="summary-section section">
        <h3 className="section-title">About me:</h3>
        {renderText(aboutMeDescription, temporaryState.aboutMe)}
      </div>

      <div className="languages-section section">
        <h3 className="section-title">Languages I speak:</h3>
        <div className="languages-wrapper row">
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
      {
        temporaryState.opened
          ? renderInfo()
          : <EmptyView section="home">{renderText(emptyViewDescription)}</EmptyView>
      }
    </div>
  );
};

export default Home;
