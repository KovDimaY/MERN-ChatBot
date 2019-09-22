import React from 'react';
import PropTypes from 'prop-types';

import EmptyView from '../../Common/EmptyView';
import ProjectItem from '../../Common/ProjectItem';

import { projects } from './constants';

import './styles.css';

const Projects = (props) => {
  const renderContent = () => (
    <React.Fragment>
      <h3 className="projects-section-title">Projects</h3>
      <div className="projects-wrapper">
        {
          projects.map(item => (
            <ProjectItem
              key={item.id}
              discovered={props[item.nameInStore]}
              {...item}
            />
          ))
        }
      </div>
    </React.Fragment>
  );

  return (
    <div className="projects-section-container">
      {
        props.discovered
          ? renderContent()
          : <EmptyView section="projects" />
      }
    </div>
  );
};

Projects.propTypes = {
  discovered: PropTypes.bool.isRequired,
};

export default Projects;
