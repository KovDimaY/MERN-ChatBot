import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

/**
 * This component is just an image with a title, link and a bit of information.
 * The idea of this card is to be used as an answer of the bot.
 * For example, when the user asks about all the projects I have done,
 * these projects can be listed in the answer of the bot as a set of card items.
 */
const CardItem = ({ title, image, description, link }) => {
  const renderLink = () => {
    if (link) {
      return (
        <div className="card-action">
          <a href={link} target="_blank" rel="noopener noreferrer">
            View
          </a>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="card-containter">
      <div className="card">
        <div className="card-image">
          <img src={image} alt="card-pic" />
          <span className="card-title">{title}</span>
        </div>
        <div className="card-content">
          <p>{description}</p>
        </div>
        {renderLink()}
      </div>
    </div>
  );
};

CardItem.propTypes = {
  /** The title of the card which should be small and clear (1-3 words). */
  title: PropTypes.string.isRequired,
  /** The relative or absolute path to the image that represents the project. */
  image: PropTypes.string.isRequired,
  /** A very short description of the card. Normally 1-3 sentences of text. */
  description: PropTypes.string.isRequired,
  /** The link to redirect when the card is clicked. */
  link: PropTypes.string.isRequired,
};

export default CardItem;
