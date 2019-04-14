import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const ProjectItem = ({
  image, name, url,
  description, tools,
}) => {
  const renderTools = () => {
    if (tools && tools.length) {
      return (
        <div className="tools">
          <div className="tools-label">Technologies:</div>
          <div>{tools.join(' | ')}</div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="project-item-container row">
      <div className="col s12 l6 visual valign-wrapper">
        <a href={url} className="screenshot-wrapper" target="_blank" rel="noopener noreferrer">
          <img src={image} alt="screenshot" className="image" />
        </a>
      </div>
      <div className="col s12 чl6">
        <div className="title">
          <div className="project-name">{name}</div>
          <a href={url} className="project-link" target="_blank" rel="noopener noreferrer">
            See project
          </a>
        </div>
        <p className="description">{description}</p>
        { renderTools() }
      </div>
    </div>
  );
};

ProjectItem.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tools: PropTypes.array,
};

ProjectItem.defaultProps = {
  tools: null,
};

export default ProjectItem;
