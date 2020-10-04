import React from 'react';
import PropTypes from 'prop-types';

/* eslint-disable react/no-unused-prop-types */

import ExperienceItem from '../../Common/ExperienceItem';
import ProgressBar from '../../Common/ProgressBar';
import EmptyView from '../../Common/EmptyView';

import { experiences } from './constants';

import './styles.css';

const Experience = props => {
  const renderExperiences = () =>
    experiences.map(item => (
      <ExperienceItem key={item.id} discovered={props[item.nameInStore]} {...item} />
    ));

  const renderContent = () => (
    <React.Fragment>
      <h3 className="experiences-section-title">Experience</h3>
      <ProgressBar percent={props.discoveryPercent} margintTop />
      <div className="experiences-wrapper">{renderExperiences()}</div>
    </React.Fragment>
  );

  return (
    <div className="experiences-section-container">
      {props.discovered ? (
        renderContent()
      ) : (
        <EmptyView section="experience" suggestion="Describe your working experience" />
      )}
    </div>
  );
};

Experience.propTypes = {
  discovered: PropTypes.bool.isRequired,
  discoveryPercent: PropTypes.number.isRequired,
};

export default Experience;
