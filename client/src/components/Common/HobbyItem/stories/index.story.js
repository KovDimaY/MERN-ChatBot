import React from 'react';
import { storiesOf } from '@storybook/react';

import HobbyItem from '..';
import { hobbies } from '../../../Pages/Home/constants';

storiesOf('Common/HobbyItem', module)
  .add('Programming', () => (
    <div style={{ padding: '25px' }}>
      <HobbyItem {...hobbies[0]} />
    </div>
  ))
  .add('Sports', () => (
    <div style={{ padding: '25px' }}>
      <HobbyItem {...hobbies[1]} />
    </div>
  ))
  .add('Puzzles', () => (
    <div style={{ padding: '25px' }}>
      <HobbyItem {...hobbies[2]} />
    </div>
  ))
  .add('Numismatics', () => (
    <div style={{ padding: '25px' }}>
      <HobbyItem {...hobbies[3]} />
    </div>
  ))
  .add('Photography', () => (
    <div style={{ padding: '25px' }}>
      <HobbyItem {...hobbies[4]} />
    </div>
  ));
