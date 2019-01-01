import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const HobbyItem = ({ image, name, description }) => (
  <div className="hobby-container row">
    <div className="col s12 m3 l3">
      <img src={image} alt="icon" className="image" />
    </div>
    <div className="col s12 m9 l9">
      <h5 className="name">{name}</h5>
      <p className="description">{description}</p>
    </div>
  </div>
);

HobbyItem.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default HobbyItem;
