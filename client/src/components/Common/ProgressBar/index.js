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

const ProgressBar = ({ percent, margintTop }) => {
  const getColorBasedOnProgress = (progress) => {
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
    const className = `progress-bar-container${margintTop ? ' decrease-margin' : ''}`;

    return (
      <div className={className}>
        <span className="tooltip">Discovery progress: {percent}%</span>
        <Progress
          percent={percent}
          theme={getColorBasedOnProgress(percent)}
        />
      </div>
    );
  }

  return null;
};

ProgressBar.propTypes = {
  percent: PropTypes.number.isRequired,
  margintTop: PropTypes.bool,
};

ProgressBar.defaultProps = {
  margintTop: false,
};

export default ProgressBar;
