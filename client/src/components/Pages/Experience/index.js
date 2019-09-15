import React from 'react';
import PropTypes from 'prop-types';

import ExperienceItem from '../../Common/ExperienceItem';
import EmptyView from '../../Common/EmptyView';

import { experiences } from './constants';

import './styles.css';

const Experience = (props) => {
  const renderExperiences = () => (
    experiences.map(item => (
      <ExperienceItem
        key={item.id}
        discovered={props[item.nameInStore]}
        {...item}
      />
    ))
  );

  const renderContent = () => (
    <React.Fragment>
      <h3 className="experiences-section-title">Experience</h3>
      <div className="experiences-wrapper">
        {renderExperiences()}
      </div>
    </React.Fragment>
  );

  return (
    <div className="experiences-section-container">
      {
        props.discovered
          ? renderContent()
          : <EmptyView section="experience" />
      }
    </div>
  );
};

Experience.propTypes = {
  discovered: PropTypes.bool.isRequired,
};

export default Experience;
