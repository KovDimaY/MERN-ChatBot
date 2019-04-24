import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import QuickReplyItem from '../QuickReplyItem';
import { quickReplyItemData as data } from './mockData';

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
