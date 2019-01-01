import React from 'react';
import PropTypes from 'prop-types';

const CardItem = ({ data }) => {
  const {
    title, image, description, link,
  } = data;

  const renderLink = () => {
    if (link) {
      return (
        <div className="card-action">
          <a href={link}>View</a>
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
  data: PropTypes.object.isRequired,
};

export default CardItem;
