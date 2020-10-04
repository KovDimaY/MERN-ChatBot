import React from 'react';
import PropTypes from 'prop-types';

/* eslint-disable react/no-unused-prop-types */

import EmptyView from '../../Common/EmptyView';
import ProgressBar from '../../Common/ProgressBar';
import EducationItem from '../../Common/EducationItem';
import CertificationItem from '../../Common/CertificationItem';

import { educations, certificates } from './constants';

import './styles.css';

const Education = props => {
  const renderEducations = () =>
    educations.map(item => (
      <EducationItem key={item.id} discovered={props[item.nameInStore]} {...item} />
    ));

  const renderCertifications = () =>
    certificates.map(item => (
      <CertificationItem key={item.license} discovered={props.certificates} {...item} />
    ));

  const renderContent = () => (
    <React.Fragment>
      <h3 className="education-section-title">Education</h3>
      <ProgressBar percent={props.discoveryPercent} margintTop />
      <div className="educations-wrapper">{renderEducations()}</div>
      <h3 className="education-section-title">Certifications</h3>
      <div className="certifications-wrapper">{renderCertifications()}</div>
    </React.Fragment>
  );

  return (
    <div className="education-section-container">
      {props.discovered ? (
        renderContent()
      ) : (
        <EmptyView section="education" suggestion="What education do you have?" />
      )}
    </div>
  );
};

Education.propTypes = {
  discovered: PropTypes.bool.isRequired,
  certificates: PropTypes.bool.isRequired,
  discoveryPercent: PropTypes.number.isRequired,
};

export default Education;
