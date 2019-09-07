import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

/**
 * This component is just a card with information about my personal project.
 * Normally, it has image of the project, the name, description of the project,
 * technologies used in the project and the link to see the project
 * (GitHub or the deployed version in production).
 * User can be redirected to the project by both clicking the image or clicking the link
 * under the title of the card.
 */
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
      <div className="col s12 l4 visual valign-wrapper">
        <a href={url} className="screenshot-wrapper" target="_blank" rel="noopener noreferrer">
          <img src={image} alt="screenshot" className="image" />
        </a>
      </div>
      <div className="col s12 l8">
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
  /** The relative or absolute path to the image that represents the project. */
  image: PropTypes.string.isRequired,
  /** The title of the card which is the name of the project. */
  name: PropTypes.string.isRequired,
  /** The link to the Github or the production website of the project. */
  url: PropTypes.string.isRequired,
  /** A short description of the project. Normally around 5 sentences of text. */
  description: PropTypes.string.isRequired,
  /** An array of strings. Each element is a tool that I was using at my work. */
  tools: PropTypes.array,
};

ProjectItem.defaultProps = {
  tools: null,
};

export default ProjectItem;
