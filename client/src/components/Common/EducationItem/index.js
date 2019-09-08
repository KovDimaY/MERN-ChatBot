import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import { getDuration } from 'utils/common';

import './styles.css';

/**
 * This component is just a card with information about my education.
 * Normally, it has info about my university degree, including field, name of the degree,
 * name of the university, dates of study, location, short description
 * of the university and the degree and a list of additional activities.
 * When the user clicks on the logo of the university one is redirected to the
 * official website of the university.
 */
const EducationItem = ({
  image, schoolName, schoolLink,
  degree, start, finish,
  location, description, activities,
}) => {
  const renderActivities = () => {
    if (activities && activities.length) {
      return (
        <div className="activities">
          <div className="activities-label">Roles and activities:</div>
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
        <a href={schoolLink} target="_blank" rel="noopener noreferrer">
          <img src={image} alt="icon" className="image" />
        </a>
      </div>
      <div className="col s12 m9">
        <div className="title">
          <div className="degree">{degree}</div>
          <a href={schoolLink} className="school" target="_blank" rel="noopener noreferrer">
            {schoolName}
          </a>
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
  /** The relative or absolute path to the image of the official logo of the university. */
  image: PropTypes.string.isRequired,
  /** Official name of the university where the degree was obtained. */
  schoolName: PropTypes.string.isRequired,
  /** The link to the official website of the university. */
  schoolLink: PropTypes.string.isRequired,
  /** A string that consists of the field and a level of the degree separated by a comma. */
  degree: PropTypes.string.isRequired,
  /** A string that consists of City and Country separated by a comma. */
  location: PropTypes.string.isRequired,
  /** A short description of the university. Normally a paragraph with 3-5 sentences of text. */
  description: PropTypes.string.isRequired,
  /** Classical Date object of the date of the start of studies. */
  start: PropTypes.object.isRequired,
  /** Classical Date object of the date of the finish of studies. */
  finish: PropTypes.object,
  /** An array of strings. Each element is an activity which I was doing during my study. */
  activities: PropTypes.array,
};

EducationItem.defaultProps = {
  finish: undefined,
  activities: null,
};

export default EducationItem;
