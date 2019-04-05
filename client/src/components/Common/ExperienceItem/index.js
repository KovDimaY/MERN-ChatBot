import React from 'react';
import PropTypes from 'prop-types';

const ExperienceItem = ({ image, companyName, description }) => (
  <div className="hobby-container row valign-wrapper">
    <div className="col s12 m3 visual">
      <h5 className="name">{companyName}</h5>
      <img src={image} alt="icon" className="image" />
    </div>
    <div className="col s12 m9">
      <p className="description">{description}</p>
    </div>
  </div>
);

ExperienceItem.propTypes = {
  image: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ExperienceItem;
