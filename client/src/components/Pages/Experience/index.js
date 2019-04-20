import React from 'react';

import ExperienceItem from '../../Common/ExperienceItem';

import {
  experiences,
} from './constants';

import './styles.css';

const Experience = () => {
  const renderExperiences = () => (
    experiences.map(item => <ExperienceItem {...item} key={item.id} />)
  );

  return (
    <div className="experiences-section-container">
      <h3 className="experiences-section-title">Experience</h3>
      <div className="experiences-wrapper">
        {renderExperiences()}
      </div>
    </div>
  );
};

export default Experience;
