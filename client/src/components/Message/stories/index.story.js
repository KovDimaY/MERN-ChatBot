import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, object } from '@storybook/addon-knobs';

import QuickReplies from '..';
import { data } from './mockData';

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
          onReply={action('onReply actioned')}
        />
      </div>
      <h5>Real life scenario:</h5>
      <div style={{ margin: '25px', maxWidth: '450px', border: '1px solid black' }}>
        <QuickReplies
          type={data[0].type}
          author={data[0].author}
          msg={text('Message', data[0].msg)}
          onReply={action('onReply actioned')}
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
          onReply={action('onReply actioned')}
        />
      </div>
      <h5>Real life scenario:</h5>
      <div style={{ margin: '25px', maxWidth: '450px', border: '1px solid black' }}>
        <QuickReplies
          type={data[1].type}
          author={data[1].author}
          msg={text('Message', data[1].msg)}
          onReply={action('onReply actioned')}
        />
      </div>
    </div>
  ))
  .add('Cards message from the bot', () => (
    <div style={{ padding: '25px' }}>
      <h5>No limits:</h5>
      <div style={{ margin: '25px' }}>
        <QuickReplies
          type={data[2].type}
          author={data[2].author}
          msg={object('Message', data[2].msg)}
          onReply={action('onReply actioned')}
        />
      </div>
      <h5>Real life scenario:</h5>
      <div style={{ margin: '25px', maxWidth: '450px', border: '1px solid black' }}>
        <QuickReplies
          type={data[2].type}
          author={data[2].author}
          msg={object('Message', data[2].msg)}
          onReply={action('onReply actioned')}
        />
      </div>
    </div>
  ))
  .add('Quick reply message from the bot', () => (
    <div style={{ padding: '25px' }}>
      <h5>No limits:</h5>
      <div style={{ margin: '25px' }}>
        <QuickReplies
          type={data[3].type}
          author={data[3].author}
          msg={object('Message', data[3].msg)}
          onReply={action('onReply actioned')}
        />
      </div>
      <h5>Real life scenario:</h5>
      <div style={{ margin: '25px', maxWidth: '450px', border: '1px solid black' }}>
        <QuickReplies
          type={data[3].type}
          author={data[3].author}
          msg={object('Message', data[3].msg)}
          onReply={action('onReply actioned')}
        />
      </div>
    </div>
  ))
  .add('Error message from the bot', () => (
    <div style={{ padding: '25px' }}>
      <h5>No limits:</h5>
      <div style={{ margin: '25px' }}>
        <QuickReplies
          type={data[4].type}
          author={data[4].author}
          msg={text('Message', data[4].msg)}
          onReply={action('onReply actioned')}
        />
      </div>
      <h5>Real life scenario:</h5>
      <div style={{ margin: '25px', maxWidth: '450px', border: '1px solid black' }}>
        <QuickReplies
          type={data[4].type}
          author={data[4].author}
          msg={text('Message', data[4].msg)}
          onReply={action('onReply actioned')}
        />
      </div>
    </div>
  ));
