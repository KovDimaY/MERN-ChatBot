import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import HomePage from 'components/Pages/Home';

import {
  selectDiscovered, selectName,
  selectPosition, selectLocation,
  selectContacts, selectAge,
  selectNationality, selectAboutMe,
  selectLanguages, selectHobbies,
  selectDiscoveryPercent,
} from './selectors';


export const HomePageContainer = props => (
  <HomePage
    discovered={props.discovered}
    name={props.name}
    position={props.position}
    location={props.location}
    contacts={props.contacts}
    age={props.age}
    nationality={props.nationality}
    aboutMe={props.aboutMe}
    languages={props.languages}
    hobbies={props.hobbies}
    discoveryPercent={props.discoveryPercent}
  />
);

const mapStateToProps = createStructuredSelector({
  discovered: selectDiscovered(),
  name: selectName(),
  position: selectPosition(),
  location: selectLocation(),
  contacts: selectContacts(),
  age: selectAge(),
  nationality: selectNationality(),
  aboutMe: selectAboutMe(),
  languages: selectLanguages(),
  hobbies: selectHobbies(),
  discoveryPercent: selectDiscoveryPercent(),
});

HomePageContainer.propTypes = {
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

export default connect(mapStateToProps)(HomePageContainer);
