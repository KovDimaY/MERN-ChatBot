import React from 'react';

import EducationItem from '../../Common/EducationItem';

import {
  educations,
} from './constants';

// import './styles.css';

const Education = () => {
  const renderEducations = () => (
    educations.map(item => <EducationItem {...item} key={item.id} />)
  );

  return (
    <div className="experiences-section-container">
      {renderEducations()}
    </div>
  );
};

export default Education;
