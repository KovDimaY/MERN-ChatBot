import React from 'react';

import EducationItem from '../../Common/EducationItem';
import CertificationItem from '../../Common/CertificationItem';

import {
  educations,
  certificates,
} from './constants';

import './styles.css';

const Education = () => {
  const renderEducations = () => (
    educations.map(item => <EducationItem {...item} key={item.id} />)
  );

  const renderCertifications = () => (
    certificates.map(item => <CertificationItem {...item} key={item.license} />)
  );

  return (
    <div className="education-section-container">
      <div className="educations-wrapper">
        { renderEducations() }
      </div>
      <div className="certifications-wrapper">
        { renderCertifications() }
      </div>
    </div>
  );
};

export default Education;
