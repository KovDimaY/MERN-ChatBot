import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

/**
 * This component is a static element which represents a language and the level of its proficiency.
 * It consists of a flag image of the country of the origin of the language,
 * name of the language and the level of the proficiency of this language.
 */
const LanguageItem = ({ image, name, level }) => (
  <div className="language-container col s6 m3">
    <img src={image} alt="flag" className="country-flag" />
    <div className="name">{name}</div>
    <div className="level">{level}</div>
  </div>
);

LanguageItem.propTypes = {
  /** This prop is a source of an image of the flag.
   * Can be a relative or absolute path to the image of the flag.
   */
  image: PropTypes.string.isRequired,
  /** This prop is a name of the language. Should be provided in the corresponding language. */
  name: PropTypes.string.isRequired,
  /** This prop is a level of the the proficiency of the language.
   * Should be provided in English.
   */
  level: PropTypes.string.isRequired,
};

export default LanguageItem;
