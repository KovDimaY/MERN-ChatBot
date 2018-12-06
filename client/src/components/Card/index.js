import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const Card = ({ data }) => {
  const {
    title, image, description, link,
  } = data;

  return (
    <div className="card-containter">
      <div className="card">
        <div className="card-image">
          <img src={image} alt="card-pic" />
          <span className="card-title">{title}</span>
        </div>
        <div className="card-content">
          <p>
            {description}
          </p>
        </div>
        <div className="card-action">
          <a href={link}>View</a>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Card;
