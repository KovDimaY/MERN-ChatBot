import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

/**
 * This component is just a card with the information about one of my hobbies.
 * It has a title (name of the hobby), image of the hobby and the short desctiption.
 */
const HobbyItem = ({ image, name, description }) => (
  <div className="hobby-container row valign-wrapper">
    <div className="col s12 m3 visual">
      <h5 className="name">{name}</h5>
      <img src={image} alt="icon" className="image" />
    </div>
    <div className="col s12 m9">
      <p className="description">{description}</p>
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
};

export default HobbyItem;
