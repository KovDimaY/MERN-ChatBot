import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import { getDuration } from '../../../utils/common';

const ExperienceItem = ({
  image, companyName, companyLink,
  position, start, finish,
  location, description, responsibilities, tools,
}) => {
  const renderResponsibilities = () => {
    if (responsibilities && responsibilities.length) {
      return (
        <div className="responsibilities">
          <span>Main responsibilities:</span>
          <ul>
            {responsibilities.map(item => <li key={item}>{item}</li>)}
          </ul>
        </div>
      );
    }
    return null;
  };

  const renderTools = () => {
    if (tools && tools.length) {
      return (
        <div className="tools">
          <span>Technologies: </span>{tools.join(' | ')}
        </div>
      );
    }
    return null;
  };

  const renderDates = () => {
    const startDate = moment(start).format('MMM YYYY');
    const finishDate = finish ? moment(finish).format('MMM YYYY') : 'Now';
    const duration = getDuration(start, finish);

    return (
      <div className="dates-wrapper">
        <span className="dates">{startDate} - {finishDate}</span>
        <span className="duration">({duration})</span>
      </div>
    );
  };

  return (
    <div className="hobby-container row valign-wrapper">
      <div className="col s12 m3 visual">
        <img src={image} alt="icon" className="image" />
      </div>
      <div className="col s12 m9">
        <div className="title">
          <span className="position">{position}</span>
          <span className="connector">in</span>
          <a href={companyLink} className="company">{companyName}</a>
        </div>
        { renderDates() }
        <div className="location">{location}</div>
        <p className="description">{description}</p>
        { renderResponsibilities() }
        { renderTools() }
      </div>
    </div>
  );
};

ExperienceItem.propTypes = {
  image: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
  companyLink: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  start: PropTypes.object.isRequired,
  finish: PropTypes.object,
  tools: PropTypes.array,
  responsibilities: PropTypes.array,
};

ExperienceItem.defaultProps = {
  finish: undefined,
  tools: null,
  responsibilities: null,
};

export default ExperienceItem;
