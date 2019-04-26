import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';

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
  .addDecorator(withKnobs)
  .add('Text message from the bot', () => (
    <div style={{ padding: '25px' }}>
      <h5>No limits:</h5>
      <div style={{ margin: '25px' }}>
        <QuickReplies
          type={data[0].type}
          author={data[0].author}
          msg={text('Message', data[0].msg)}
          onReply={action('onReply clicked')}
        />
      </div>
      <h5>Real life scenario:</h5>
      <div style={{ margin: '25px', maxWidth: '450px', border: '1px solid black' }}>
        <QuickReplies
          type={data[0].type}
          author={data[0].author}
          msg={text('Message', data[0].msg)}
          onReply={action('onReply clicked')}
        />
      </div>
    </div>
  ))
  .add('Text message from the user', () => (
    <div style={{ padding: '25px' }}>
      <h5>No limits:</h5>
      <div style={{ margin: '25px' }}>
        <QuickReplies
          type={data[1].type}
          author={data[1].author}
          msg={text('Message', data[1].msg)}
          onReply={action('onReply clicked')}
        />
      </div>
      <h5>Real life scenario:</h5>
      <div style={{ margin: '25px', maxWidth: '450px', border: '1px solid black' }}>
        <QuickReplies
          type={data[1].type}
          author={data[1].author}
          msg={text('Message', data[1].msg)}
          onReply={action('onReply clicked')}
        />
      </div>
    </div>
  ))
  .add('Cards message from the bot', () => WrappedComponent(data[2]))
  .add('Quick reply message from the bot', () => WrappedComponent(data[3]))
  .add('Error message from the bot', () => (
    <div style={{ padding: '25px' }}>
      <h5>No limits:</h5>
      <div style={{ margin: '25px' }}>
        <QuickReplies
          type={data[4].type}
          author={data[4].author}
          msg={text('Message', data[4].msg)}
          onReply={action('onReply clicked')}
        />
      </div>
      <h5>Real life scenario:</h5>
      <div style={{ margin: '25px', maxWidth: '450px', border: '1px solid black' }}>
        <QuickReplies
          type={data[4].type}
          author={data[4].author}
          msg={text('Message', data[4].msg)}
          onReply={action('onReply clicked')}
        />
      </div>
    </div>
  ));
