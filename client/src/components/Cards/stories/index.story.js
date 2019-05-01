import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, object } from '@storybook/addon-knobs';

import { marginSize } from '../../../constants/storybook';

import Cards from '..';
import { cardsData as data } from './mockData';

storiesOf('Cards', module)
  .addDecorator(withKnobs)
  .add('No width limit', () => (
    <div style={{ margin: marginSize }}>
      <Cards data={object('Data', data)} />
    </div>
  ))
  .add('Real life example', () => (
    <div style={{ margin: marginSize, maxWidth: '450px', border: '1px solid black' }}>
      <Cards data={object('Data', data)} />
    </div>
  ));
