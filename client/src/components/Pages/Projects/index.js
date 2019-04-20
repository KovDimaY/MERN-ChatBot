import React from 'react';

import ProjectItem from '../../Common/ProjectItem';

import { projects } from './constants';

import './styles.css';

const Projects = () => {
  const renderProjects = () => (
    projects.map(item => <ProjectItem {...item} key={item.id} />)
  );

  return (
    <div className="projects-section-container">
      <h3 className="projects-section-title">Projects</h3>
      <div className="projects-wrapper">
        { renderProjects() }
      </div>
    </div>
  );
};

export default Projects;
