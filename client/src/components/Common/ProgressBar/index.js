import React from 'react';
import PropTypes from 'prop-types';

import { Progress } from 'react-sweet-progress';
import 'react-sweet-progress/lib/style.css';

import './styles.css';

const colors = {
  25: {
    symbol: '🙄',
    trailColor: '#ffe0b2',
    color: '#ff9800',
  },
  50: {
    symbol: '🤔',
    trailColor: '#fff9c4',
    color: '#ffeb3b',
  },
  75: {
    symbol: '🤓',
    trailColor: '#f0f4c3',
    color: '#cddc39',
  },
  100: {
    symbol: '🤗',
    trailColor: '#c8e6c9',
    color: '#4caf50',
  },
};

/**
 * This component is a simple progressbar which shows the progress
 * of discovery of the content on the page. It consists of a colored bar,
 * a tooltip with the number of percents discovered and an icon.
 * This component is never shown if 0% or 100% discovered. For other percentages
 * this component has different colors and icons.
 */
const ProgressBar = ({ percent, margintTop }) => {
  const getColorBasedOnProgress = progress => {
    switch (true) {
      case progress < 25:
        return { active: colors[25] };
      case progress < 50:
        return { active: colors[50] };
      case progress < 75:
        return { active: colors[75] };
      default:
        return { active: colors[100] };
    }
  };

  if (percent < 100) {
    const className = `progress-bar-container${
      margintTop ? ' decrease-margin' : ''
    }`;

    return (
      <div className={className}>
        <span className="tooltip">Discovery progress: {percent}%</span>
        <Progress percent={percent} theme={getColorBasedOnProgress(percent)} />
      </div>
    );
  }

  return null;
};

ProgressBar.propTypes = {
  /** Number of discovered percents of the information on the page. */
  percent: PropTypes.number.isRequired,
  /** This is a "workaround" prop to make the progress bar closer to the
   *  title of the page. It is used for all the pages except the Home page.
   */
  margintTop: PropTypes.bool,
};

ProgressBar.defaultProps = {
  margintTop: false,
};

export default ProgressBar;
