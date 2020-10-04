import React from 'react';
import PropTypes from 'prop-types';

/* eslint-disable react/no-unused-prop-types */

import EmptyView from '../../Common/EmptyView';
import ProgressBar from '../../Common/ProgressBar';
import ProjectItem from '../../Common/ProjectItem';

import { projects } from './constants';

import './styles.css';

const Projects = props => {
  const renderContent = () => (
    <React.Fragment>
      <h3 className="projects-section-title">Projects</h3>
      <ProgressBar percent={props.discoveryPercent} margintTop />
      <div className="projects-wrapper">
        {projects.map(item => (
          <ProjectItem key={item.id} discovered={props[item.nameInStore]} {...item} />
        ))}
      </div>
    </React.Fragment>
  );

  return (
    <div className="projects-section-container">
      {props.discovered ? (
        renderContent()
      ) : (
        <EmptyView section="personal projects" suggestion="Tell me about your projects" />
      )}
    </div>
  );
};

Projects.propTypes = {
  discovered: PropTypes.bool.isRequired,
  discoveryPercent: PropTypes.number.isRequired,
};

export default Projects;
