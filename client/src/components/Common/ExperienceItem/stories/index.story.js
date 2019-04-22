import React from 'react';
import { storiesOf } from '@storybook/react';

import ExperienceItem from '..';
import { experiences } from '../../../Pages/Experience/constants';

const WrappedComponent = props => (
  <div style={{ padding: '25px' }}>
    <ExperienceItem {...props} />
  </div>
);

storiesOf('Common/ExperienceItem', module)
  .add('Cornerjob', () => WrappedComponent(experiences[0]))
  .add('Bigfinite Inc', () => WrappedComponent(experiences[1]))
  .add('Enixan Entertainment', () => WrappedComponent(experiences[2]))
  .add('MBA Strategy', () => WrappedComponent(experiences[3]))
  .add('Icicle Seafoods', () => WrappedComponent(experiences[4]));
