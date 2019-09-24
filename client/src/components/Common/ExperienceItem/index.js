import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import { getDuration, showHiddenText } from 'utils/common';

import './styles.css';

/**
 * This component is just a card with information about my working experience.
 * Normally, it has info about the commany and the position that I had in that company.
 * The card consist of the name of the company, name of the position in the company,
 * dates of the beginning and the end of work, location, short description
 * of my responsbilities and a list of technologies used at work.
 * When the user clicks on the logo of the company one is redirected to the
 * official website of the company.
 * Some part of the information can be hidden for the user if it is not yet
 * discovered. In this case the info will be replaced by question marks.
 */
const ExperienceItem = ({
  image, companyName, companyLink,
  position, start, finish, discovered,
  location, description, responsibilities, tools,
}) => {
  const renderResponsibilities = () => {
    if (responsibilities && responsibilities.length) {
      return (
        <div className="responsibilities">
          <div className="responsibilities-label">Main responsibilities:</div>
          <ul>
            {
              responsibilities.map(item => (
                <li key={item}>
                  {showHiddenText(item, discovered.responsibilities)}
                </li>
              ))
            }
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
          <div className="tools-label">Technologies: </div>
          <div>
            {
              tools
                .map(item => showHiddenText(item, discovered.technologies))
                .join(' | ')
            }
          </div>
        </div>
      );
    }
    return null;
  };

  const renderDates = () => {
    if (discovered.duration) {
      const startDate = moment(start).format('MMM YYYY');
      const finishDate = finish ? moment(finish).format('MMM YYYY') : 'Now';
      const duration = getDuration(start, finish);

      return (
        <div className="dates-wrapper">
          <span className="dates">{startDate} - {finishDate}</span>
          <span className="duration">({duration})</span>
        </div>
      );
    }

    return (
      <div className="dates-wrapper">
        <span className="dates">
          <strong>Duration:</strong> ???? - ????
        </span>
      </div>
    );
  };

  const renderTitle = () => (
    <div className="title">
      <span className="position">
        {showHiddenText(position, discovered.position)}
      </span>
      <span className="connector">in</span>
      <a href={companyLink} className="company" target="_blank" rel="noopener noreferrer">
        {companyName}
      </a>
    </div>
  );

  return (
    <div className="experience-container row valign-wrapper">
      <div className="col s12 m3 visual">
        <a href={companyLink} target="_blank" rel="noopener noreferrer">
          <img src={image} alt="icon" className="image" />
        </a>
      </div>
      <div className="col s12 m9">
        { renderTitle() }
        { renderDates() }
        <div className="location">{location}</div>
        <p className="description">
          {showHiddenText(description, discovered.description)}
        </p>
        { renderResponsibilities() }
        { renderTools() }
      </div>
    </div>
  );
};

ExperienceItem.propTypes = {
  /** The relative or absolute path to the image of the official logo of the company. */
  image: PropTypes.string.isRequired,
  /** Official name of the company where I was working. */
  companyName: PropTypes.string.isRequired,
  /** The link to the official website of the company. */
  companyLink: PropTypes.string.isRequired,
  /** A string that consists of the official name of the position in the company. */
  position: PropTypes.string.isRequired,
  /** A string that consists of City and Country separated by a comma. */
  location: PropTypes.string.isRequired,
  /** A short description of my work. Normally 3-5 sentences of text. */
  description: PropTypes.string.isRequired,
  /** Classical Date object of the date of the start of working in the company. */
  start: PropTypes.object.isRequired,
  /** Classical Date object of the date of the finish of working in the company. */
  finish: PropTypes.object,
  /** An array of strings. Each element is a tool that I was using at my work. */
  tools: PropTypes.array,
  /** An array of strings. Each element is aresponsability that I had at my work. */
  responsibilities: PropTypes.array,
  /** An object that defines which part of the item is visible for the user.
   * By default everything is discovered if nothing else provided.
  */
  discovered: PropTypes.object,
};

ExperienceItem.defaultProps = {
  finish: undefined,
  tools: null,
  responsibilities: null,
  discovered: {
    responsibilities: true,
    technologies: true,
    duration: true,
    position: true,
    description: true,
  },
};

export default ExperienceItem;
