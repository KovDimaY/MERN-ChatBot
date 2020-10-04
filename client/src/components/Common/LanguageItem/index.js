import React from 'react';
import PropTypes from 'prop-types';

import { showHiddenText } from 'utils/common';
import { hiddenImage } from 'images';

import './styles.css';

/**
 * This component is a static element which represents a language and the level of its proficiency.
 * It consists of a flag image of the country of the origin of the language,
 * name of the language and the level of the proficiency of this language.
 * This component has two visual states: hidden and discovered. When the element is hidden
 * the user cannot see the flag and the text, they are replaced by question marks.
 */
const LanguageItem = ({ image, name, level, discovered }) => (
  <div className="language-container col s6 m3">
    <img src={discovered ? image : hiddenImage} alt="flag" className="country-flag" />
    <div className="name">{showHiddenText(name, discovered)}</div>
    <div className="level">{showHiddenText(level, discovered)}</div>
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
  /** This props defines if the info should be hidden or the user can see it. */
  discovered: PropTypes.bool.isRequired,
};

export default LanguageItem;
