import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

/**
 * This component is a static element which represents a certification
 * from some online educational website. It consists of an image of the
 * signed certificate and the name of the course as a title.
 * Also it has a hover effect and when is clicked - redirects to the
 * official website with the original version of the certificate.
 */
const CertificationItem = ({ title, image, url }) => (
  <div className="certification-container">
    <a href={url} className="image-wrapper" target="_blank" rel="noopener noreferrer">
      <img className="image" src={image} alt="certificate" />
    </a>
    <div className="title">{title}</div>
  </div>
);

CertificationItem.propTypes = {
  /** The official name of the course. */
  title: PropTypes.string.isRequired,
  /** The relative or absolute path to the image of the certificate */
  image: PropTypes.string.isRequired,
  /** URL of the original version of the certificate (always provided by the course). */
  url: PropTypes.string.isRequired,
};

export default CertificationItem;
