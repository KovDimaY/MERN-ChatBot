import React from 'react';

import EmptyView from '../../Common/EmptyView';
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
    <div>
      { false && <EmptyView section="experience" /> }
      {renderExperiences()}
    </div>
  );
};

export default Experience;
