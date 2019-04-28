import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import CardItem from '../CardItem';
import { cardItemData as data } from './mockData';

storiesOf('Cards/CardItem', module)
  .addDecorator(withKnobs)
  .add('No width limit', () => (
    <div style={{ padding: '25px' }}>
      <CardItem
        title={text('Title', data.title)}
        image={text('Image', data.image)}
        description={text('Description', data.description)}
        link={text('Link', data.link)}
      />
    </div>
  ))
  .add('Natural', () => (
    <div style={{ padding: '25px', maxWidth: '350px' }}>
      <CardItem
        title={text('Title', data.title)}
        image={text('Image', data.image)}
        description={text('Description', data.description)}
        link={text('Link', data.link)}
      />
    </div>
  ));
