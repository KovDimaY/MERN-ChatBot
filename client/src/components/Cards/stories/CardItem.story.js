import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import { paddingSize } from '../../../constants/storybook';

import CardItem from '../CardItem';
import { cardItemData as data } from './mockData';

storiesOf('Cards/CardItem', module)
  .addDecorator(withKnobs)
  .add('No width limit', () => (
    <div style={{ padding: paddingSize }}>
      <CardItem
        title={text('Title', data.title)}
        image={text('Image', data.image)}
        description={text('Description', data.description)}
        link={text('Link', data.link)}
      />
    </div>
  ))
  .add('Natural', () => (
    <div style={{ padding: paddingSize, maxWidth: '350px' }}>
      <CardItem
        title={text('Title', data.title)}
        image={text('Image', data.image)}
        description={text('Description', data.description)}
        link={text('Link', data.link)}
      />
    </div>
  ));
