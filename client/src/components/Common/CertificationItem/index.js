import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const CertificationItem = ({
  title, school, date,
  license, image, url,
}) => (
  <div className="certification-container">
    <div className="image">Image: {image}</div>
    <div className="title">title: {title}</div>
    <div className="school">school: {school}</div>
  </div>
);

CertificationItem.propTypes = {
  title: PropTypes.string.isRequired,
  school: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  license: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default CertificationItem;