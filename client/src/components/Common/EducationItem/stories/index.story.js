import React from 'react';
import { storiesOf } from '@storybook/react';

import EducationItem from '..';
import { educations } from '../../../Pages/Education/constants';

const WrappedComponent = props => (
  <div style={{ padding: '25px' }}>
    <EducationItem {...props} />
  </div>
);

storiesOf('Common/EducationItem', module)
  .add('Master\'s degree', () => WrappedComponent(educations[0]))
  .add('Bachelor\'s degree', () => WrappedComponent(educations[1]));
