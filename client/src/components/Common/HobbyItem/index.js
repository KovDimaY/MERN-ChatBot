import React from 'react';
import PropTypes from 'prop-types';

import { showHiddenText } from 'utils/common';
import { hiddenImage } from 'images';

import './styles.css';

/**
 * This component is just a card with the information about one of my hobbies.
 * It has a title (name of the hobby), image of the hobby and the short desctiption.
 */
const HobbyItem = ({
  image, name, description, discovered, discoveredDetails,
}) => (
  <div className="hobby-container row valign-wrapper">
    <div className="col s12 m3 visual">
      <h5 className="name">{ showHiddenText(name, discovered)}</h5>
      <img src={discovered ? image : hiddenImage} alt="icon" className="image" />
    </div>
    <div className="col s12 m9">
      <p className="description">
        { showHiddenText(description, discoveredDetails) }
      </p>
    </div>
  </div>
);

HobbyItem.propTypes = {
  /** The relative or absolute path to the image that represents a hobby. */
  image: PropTypes.string.isRequired,
  /** A title of the card, short name of the hobby (normally one word). */
  name: PropTypes.string.isRequired,
  /** A short description of the hobby. Normally a paragraph with 3-5 sentences of text. */
  description: PropTypes.string.isRequired,
  /** This prop defines if the user can see a part of the information (image and name). */
  discovered: PropTypes.bool.isRequired,
  /** This prop defines if the user can see all the information about the hobby. */
  discoveredDetails: PropTypes.bool.isRequired,
};

export default HobbyItem;
