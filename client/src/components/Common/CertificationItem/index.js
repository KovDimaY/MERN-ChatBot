import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const CertificationItem = ({ title, image, url }) => (
  <div className="certification-container">
    <a href={url} className="image-wrapper">
      <img className="image" src={image} alt="certificate" />
    </a>
    <div className="title">{title}</div>
  </div>
);

CertificationItem.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default CertificationItem;
