import React from 'react';
import PropTypes from 'prop-types';

const CardItem = ({
  title, image, description, link,
}) => {
  const renderLink = () => {
    if (link) {
      return (
        <div className="card-action">
          <a href={link} target="_blank" rel="noopener noreferrer">View</a>
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
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default CardItem;
