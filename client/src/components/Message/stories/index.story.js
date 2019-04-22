import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import QuickReplies from '..';
import { data } from './mockData';

const WrappedComponent = props => (
  <div style={{ padding: '25px' }}>
    <h5>No limits:</h5>
    <div style={{ margin: '25px' }}>
      <QuickReplies {...props} onReply={action('onReply clicked')} />
    </div>
    <h5>Real life scenario:</h5>
    <div style={{ margin: '25px', maxWidth: '450px', border: '1px solid black' }}>
      <QuickReplies {...props} onReply={action('onReply clicked')} />
    </div>
  </div>
);

storiesOf('Message', module)
  .add('Text message from the bot', () => WrappedComponent(data[0]))
  .add('Text message from the user', () => WrappedComponent(data[1]))
  .add('Cards message from the bot', () => WrappedComponent(data[2]))
  .add('Quick reply message from the bot', () => WrappedComponent(data[3]))
  .add('Error message from the bot', () => WrappedComponent(data[4]));
