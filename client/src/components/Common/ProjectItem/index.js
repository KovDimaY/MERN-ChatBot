import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const EducationItem = ({
  image, name, url,
  description, tools,
}) => {
  const renderTools = () => {
    if (tools && tools.length) {
      return (
        <div className="tools">
          <div className="tools-label">Technologies: </div>
          <div>{tools.join(' | ')}</div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="project-item-container row valign-wrapper">
      <div className="col s12 m6 visual">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <img src={image} alt="icon" className="image" />
        </a>
      </div>
      <div className="col s12 m6">
        <div className="title">
          <div className="degree">{name}</div>
          <a href={url} className="school" target="_blank" rel="noopener noreferrer">
            See project
          </a>
        </div>
        <p className="description">{description}</p>
        { renderTools() }
      </div>
    </div>
  );
};

EducationItem.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tools: PropTypes.array,
};

EducationItem.defaultProps = {
  tools: null,
};

export default EducationItem;
