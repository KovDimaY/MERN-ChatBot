import React from 'react';
import { storiesOf } from '@storybook/react';

import CardItem from '../CardItem';

const data = {
  title: 'Title of the card',
  image: 'https://secure.i.telegraph.co.uk/multimedia/archive/03013/selfie02_3013424b.jpg',
  description: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Integer id ante odio. Suspendisse tempor dui quam, vitae
    venenatis ante consequat eget. Nullam felis diam, tincidunt
    quis congue a, pellentesque vitae ante.
  `,
  link: 'https://www.telegraph.co.uk/technology/news/11048695/Monkeys-ghosts-and-gods-cannot-own-copyright-says-US.html',
};

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
