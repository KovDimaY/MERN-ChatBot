import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, object } from '@storybook/addon-knobs';

import { Chatbot } from '..';
import { textMessages, quickRepliesMessages, cardsMessages } from './mockData';

storiesOf('Chatbot', module)
  .addDecorator(withKnobs)
  .add('Without messages closed', () => (
    <div style={{ padding: '25px' }}>
      <Chatbot
        show={boolean('Show', false)}
        onToggleShow={action('onToggleShow clicked')}
        onSubmitMessage={action('onToggleShow clicked')}
        onReply={action('onToggleShow clicked')}
      />
    </div>
  ))
  .add('Without messages opened', () => (
    <div style={{ padding: '25px' }}>
      <Chatbot
        show={boolean('Show', true)}
        onToggleShow={action('onToggleShow clicked')}
        onSubmitMessage={action('onToggleShow clicked')}
        onReply={action('onToggleShow clicked')}
      />
    </div>
  ))
  .add('With several text messages', () => (
    <div style={{ padding: '25px' }}>
      <Chatbot
        show={boolean('Show', true)}
        onToggleShow={action('onToggleShow clicked')}
        onSubmitMessage={action('onToggleShow clicked')}
        onReply={action('onToggleShow clicked')}
        messages={object('Messages', textMessages)}
      />
    </div>
  ))
  .add('With quick reply messages', () => (
    <div style={{ padding: '25px' }}>
      <Chatbot
        show={boolean('Show', true)}
        onToggleShow={action('onToggleShow clicked')}
        onSubmitMessage={action('onToggleShow clicked')}
        onReply={action('onToggleShow clicked')}
        messages={object('Messages', quickRepliesMessages)}
      />
    </div>
  ))
  .add('With cards message', () => (
    <div style={{ padding: '25px' }}>
      <Chatbot
        show={boolean('Show', true)}
        onToggleShow={action('onToggleShow clicked')}
        onSubmitMessage={action('onToggleShow clicked')}
        onReply={action('onToggleShow clicked')}
        messages={object('Messages', cardsMessages)}
      />
    </div>
  ));
