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
      {renderExperiences()}
    </div>
  );
};

export default Experience;
