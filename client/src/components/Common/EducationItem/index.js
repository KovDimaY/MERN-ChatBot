import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import './styles.css';

import { getDuration } from '../../../utils/common';

const EducationItem = ({
  image, schoolName, schoolLink,
  degree, start, finish,
  location, description, activities,
}) => {
  const renderActivities = () => {
    if (activities && activities.length) {
      return (
        <div className="activities">
          <div className="activities-label"> Roles and activities:</div>
          <ul>
            {activities.map(item => <li key={item}>{item}</li>)}
          </ul>
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
    <div className="education-container row valign-wrapper">
      <div className="col s12 m3 visual">
        <a href={schoolLink}>
          <img src={image} alt="icon" className="image" />
        </a>
      </div>
      <div className="col s12 m9">
        <div className="title">
          <div className="degree">{degree}</div>
          <a href={schoolLink} className="school">{schoolName}</a>
        </div>
        { renderDates() }
        <div className="location">{location}</div>
        <p className="description">{description}</p>
        { renderActivities() }
      </div>
    </div>
  );
};

EducationItem.propTypes = {
  image: PropTypes.string.isRequired,
  schoolName: PropTypes.string.isRequired,
  schoolLink: PropTypes.string.isRequired,
  degree: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  start: PropTypes.object.isRequired,
  finish: PropTypes.object,
  description: PropTypes.string,
  activities: PropTypes.array,
};

EducationItem.defaultProps = {
  finish: undefined,
  description: undefined,
  activities: null,
};

export default EducationItem;
