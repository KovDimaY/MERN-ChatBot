import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';

import QuickReplyItem from '../QuickReplyItem';
import { quickReplyItemData as data } from './mockData';

storiesOf('QuickReplies/QuickReplyItem', module)
  .addDecorator(withKnobs)
  .add('Link', () => (
    <div style={{ padding: '25px' }}>
      <QuickReplyItem
        type={text('Type', data[0].type)}
        text={text('Text', data[0].text)}
        value={text('Value', data[0].value)}
        onClick={action('Link clicked')}
      />
    </div>
  ))
  .add('Text', () => (
    <div style={{ padding: '25px' }}>
      <QuickReplyItem
        type={text('Type', data[1].type)}
        text={text('Text', data[1].text)}
        value={text('Value', data[1].value)}
        onClick={action('Text clicked')}
      />
    </div>
  ))
  .add('Trigger', () => (
    <div style={{ padding: '25px' }}>
      <QuickReplyItem
        type={text('Type', data[2].type)}
        text={text('Text', data[2].text)}
        value={text('Value', data[2].value)}
        onClick={action('Trigger clicked')}
      />
    </div>
  ))
  .add('Disabled', () => (
    <div style={{ padding: '25px' }}>
      <QuickReplyItem
        type={text('Type', data[3].type)}
        text={text('Text', data[3].text)}
        value={text('Value', data[3].value)}
        onClick={action('Disabled clicked')}
        disabled
      />
    </div>
  ));
