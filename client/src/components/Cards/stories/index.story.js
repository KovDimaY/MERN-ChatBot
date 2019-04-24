import React from 'react';
import { storiesOf } from '@storybook/react';

import Cards from '..';
import { cardsData as data } from './mockData';

storiesOf('Cards', module)
  .add('No width limit', () => (
    <div style={{ margin: '25px' }}>
      <Cards data={data} />
    </div>
  ))
  .add('Real life example', () => (
    <div style={{ margin: '25px', maxWidth: '450px', border: '1px solid black' }}>
      <Cards data={data} />
    </div>
  ));
