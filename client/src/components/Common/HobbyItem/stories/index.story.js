import React from 'react';
import { storiesOf } from '@storybook/react';

import HobbyItem from '..';
import { hobbies } from '../../../Pages/Home/constants';

const WrappedComponent = props => (
  <div style={{ padding: '25px' }}>
    <HobbyItem {...props} />
  </div>
);

storiesOf('Common/HobbyItem', module)
  .add('Programming', () => WrappedComponent(hobbies[0]))
  .add('Sports', () => WrappedComponent(hobbies[1]))
  .add('Puzzles', () => WrappedComponent(hobbies[2]))
  .add('Numismatics', () => WrappedComponent(hobbies[3]))
  .add('Photography', () => WrappedComponent(hobbies[4]));
