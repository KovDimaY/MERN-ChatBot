import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import HomePage from 'components/Pages/Home';

import {
  selectDiscovered, selectName,
  selectPosition, selectLocation,
  selectContactInfo, selectAge,
  selectNationality, selectAboutMe,
  selectLanguages, selectHobbies,
} from './selectors';


const HomePageContainer = props => (
  <HomePage
    discovered={props.discovered}
    name={props.name}
    position={props.position}
    location={props.location}
    contactInfo={props.contactInfo}
    age={props.age}
    nationality={props.nationality}
    aboutMe={props.aboutMe}
    languages={props.languages}
    hobbies={props.hobbies}
  />
);

const mapStateToProps = createStructuredSelector({
  discovered: selectDiscovered(),
  name: selectName(),
  position: selectPosition(),
  location: selectLocation(),
  contactInfo: selectContactInfo(),
  age: selectAge(),
  nationality: selectNationality(),
  aboutMe: selectAboutMe(),
  languages: selectLanguages(),
  hobbies: selectHobbies(),
});

export default connect(mapStateToProps)(HomePageContainer);
