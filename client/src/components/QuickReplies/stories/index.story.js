import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import QuickReplies from '..';

const data = {
  values: [
    {
      type: 'link',
      text: 'This is a link',
      value: 'https://secure.i.telegraph.co.uk/multimedia/archive/03013/selfie02_3013424b.jpg',
    },
    {
      type: 'text',
      text: 'This is a text',
      value: 'A value for text',
    },
    {
      type: 'text',
      text: 'Another text',
      value: 'A value for another text',
    },
    {
      type: 'trigger',
      text: 'This is a trigger',
      value: 'A value for trigger',
    },
  ],
};

storiesOf('QuickReplies', module)
  .add('No width limit', () => (
    <div style={{ padding: '25px' }}>
      <QuickReplies data={data} onReply={action('onReply clicked')} />
    </div>
  ))
  .add('Real life example', () => (
    <div style={{ margin: '25px', maxWidth: '450px', border: '1px solid black' }}>
      <QuickReplies data={data} onReply={action('onReply clicked')} />
    </div>
  ));
