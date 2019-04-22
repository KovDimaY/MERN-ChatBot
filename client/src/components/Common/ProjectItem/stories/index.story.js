import React from 'react';
import { storiesOf } from '@storybook/react';

import ProjectItem from '..';
import { projects } from '../../../Pages/Projects/constants';

const WrappedComponent = props => (
  <div style={{ padding: '25px' }}>
    <ProjectItem {...props} />
  </div>
);

storiesOf('Common/ProjectItem', module)
  .add('TripReviewer', () => WrappedComponent(projects[0]))
  .add('SimpleChat', () => WrappedComponent(projects[1]))
  .add('React-Highcharts Playground', () => WrappedComponent(projects[2]))
  .add('Memory Game', () => WrappedComponent(projects[3]))
  .add('KovDimaY', () => WrappedComponent(projects[4]));
