import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const LanguageItem = ({ image, name, level }) => (
  <div className="language-container">
    <img src={image} alt="flag" className="country-flag" />
    <div className="name">{name}</div>
    <div className="level">{level}</div>
  </div>
);

LanguageItem.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
};

export default LanguageItem;
