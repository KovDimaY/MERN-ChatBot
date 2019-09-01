import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

/**
 * This component was created to be shown when the page is not yet discovered at all (0%).
 * When at least something is discovered on the page it is going to be changed to
 * another view where some information is opened and some is hidden.
 */
const EmptyView = ({ section, children }) => {
  const defaultDescription = (
    <React.Fragment>
      <p>
        This section is dedicated to the information about my {section}.
      </p>
      <p>
        For the moment you have not discovered anything regarding
        this topic. To get some info - ask the bot right question.
        When the bot gives you some related answer - the information will
        appear on this page. Ask more questions to collect more info! Good luck!
      </p>
      <p>
        If you are lazy and you do not want to play with the bot - here
        you can find a link to
        my <a href="https://www.linkedin.com/in/kovalenkodmytro/" target="_blank" rel="noopener noreferrer">LinkedIn</a> profile
        and see everything at once.
      </p>
      <p>
        Do not hesitate to contact me and share your opinion about this project!
        I will appreciate a lot any feedback even if it is negative! Thank you in advance! :)
      </p>
    </React.Fragment>
  );

  return (
    <div className="empty-view-container">
      { children || defaultDescription }
    </div>
  );
};

EmptyView.propTypes = {
  /** Name of the section to be added at the title of the page. */
  section: PropTypes.string.isRequired,
  /** Custom content of the page to overwrite the default one.  */
  children: PropTypes.node,
};

EmptyView.defaultProps = {
  children: null,
};

export default EmptyView;
