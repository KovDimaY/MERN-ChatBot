import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

/**
 * This component was created to be shown when the page is not yet discovered at all (0%).
 * When at least something is discovered on the page it is going to be changed to
 * another view where some information is opened and some is hidden.
 */
const EmptyView = ({ section, children, suggestion }) => {
  const defaultDescription = (
    <React.Fragment>
      <p>This section is dedicated to the information about my {section}.</p>
      <p>
        For the moment you have not discovered anything regarding this topic. To get some info - ask
        the bot right question. When the bot gives you some related answer - the information will
        appear on this page. You will have a progress bar that will help you to understand how much
        info you have opened already.
      </p>
      <p>
        For example, <b>&quot;{suggestion}&quot;</b> sounds like a great question to start, but it
        can be something else too, just use your imagination ;)
      </p>
    </React.Fragment>
  );

  return <div className="empty-view-container">{children || defaultDescription}</div>;
};

EmptyView.propTypes = {
  /** Name of the section to be added at the title of the page. */
  section: PropTypes.string.isRequired,
  /** Custom content of the page to overwrite the default one.  */
  children: PropTypes.node,
  /** This is an string with suggested question for the user.  */
  suggestion: PropTypes.string.isRequired,
};

EmptyView.defaultProps = {
  children: null,
};

export default EmptyView;
