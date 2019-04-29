import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, object } from '@storybook/addon-knobs';

import Cards from '..';
import { cardsData as data } from './mockData';

storiesOf('Cards', module)
  .addDecorator(withKnobs)
  .add('No width limit', () => (
    <div style={{ margin: '25px' }}>
      <Cards data={object('Data', data)} />
    </div>
  ))
  .add('Real life example', () => (
    <div style={{ margin: '25px', maxWidth: '450px', border: '1px solid black' }}>
      <Cards data={object('Data', data)} />
    </div>
  ));
