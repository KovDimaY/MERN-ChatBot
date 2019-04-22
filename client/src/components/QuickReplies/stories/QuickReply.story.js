import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import QuickReplyItem from '../QuickReplyItem';

const data = {
  link: {
    type: 'link',
    text: 'This is a link',
    value: 'https://secure.i.telegraph.co.uk/multimedia/archive/03013/selfie02_3013424b.jpg',
  },
  text: {
    type: 'text',
    text: 'This is a text',
    value: 'A value for text',
  },
  trigger: {
    type: 'trigger',
    text: 'This is a trigger',
    value: 'A value for trigger',
  },
  disabled: {
    type: 'text',
    text: 'This button is disabled',
    value: 'A value for disabled',
  },
};

storiesOf('QuickReplies/QuickReplyItem', module)
  .add('Link', () => (
    <div style={{ padding: '25px' }}>
      <QuickReplyItem data={data.link} onClick={action('Link clicked')} />
    </div>
  ))
  .add('Text', () => (
    <div style={{ padding: '25px' }}>
      <QuickReplyItem data={data.text} onClick={action('Text clicked')} />
    </div>
  ))
  .add('Trigger', () => (
    <div style={{ padding: '25px' }}>
      <QuickReplyItem data={data.trigger} onClick={action('Trigger clicked')} />
    </div>
  ))
  .add('Disabled', () => (
    <div style={{ padding: '25px' }}>
      <QuickReplyItem data={data.text} onClick={action('Disabled clicked')} disabled />
    </div>
  ));
