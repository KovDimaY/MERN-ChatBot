import React from 'react';
import { storiesOf } from '@storybook/react';

import CardItem from '../CardItem';
import { cardItemData as data } from './mockData';

storiesOf('Cards/CardItem', module)
  .add('No width limit', () => (
    <div style={{ padding: '25px' }}>
      <CardItem data={data} />
    </div>
  ))
  .add('Natural', () => (
    <div style={{ padding: '25px', maxWidth: '350px' }}>
      <CardItem data={data} />
    </div>
  ));
