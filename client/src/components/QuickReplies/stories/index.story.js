import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, object } from '@storybook/addon-knobs';

import QuickReplies from '..';
import { quickRepliesData as data } from './mockData';

storiesOf('QuickReplies', module)
  .addDecorator(withKnobs)
  .add('No width limit', () => (
    <div style={{ padding: '25px' }}>
      <QuickReplies data={object('Data', data)} onReply={action('onReply clicked')} />
    </div>
  ))
  .add('Real life example', () => (
    <div style={{ margin: '25px', maxWidth: '450px', border: '1px solid black' }}>
      <QuickReplies data={object('Data', data)} onReply={action('onReply clicked')} />
    </div>
  ));
