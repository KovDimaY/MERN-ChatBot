import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, object } from '@storybook/addon-knobs';

import { paddingSize } from 'constants/storybook';

import { Chatbot } from '..';
import { textMessages, quickRepliesMessages, cardsMessages } from './mockData';

storiesOf('Chatbot', module)
  .addDecorator(withKnobs)
  .add('Without messages closed', () => (
    <div style={{ padding: paddingSize }}>
      <Chatbot
        show={boolean('Show', false)}
        onToggleShow={action('onToggleShow actioned')}
        onSubmitMessage={action('onSubmitMessage actioned')}
        onReply={action('onReply actioned')}
        isTyping={boolean('Is typing', false)}
      />
    </div>
  ))
  .add('Without messages opened', () => (
    <div style={{ padding: paddingSize }}>
      <Chatbot
        show={boolean('Show', true)}
        onToggleShow={action('onToggleShow actioned')}
        onSubmitMessage={action('onSubmitMessage actioned')}
        onReply={action('onReply actioned')}
        isTyping={boolean('Is typing', false)}
      />
    </div>
  ))
  .add('With several text messages', () => (
    <div style={{ padding: paddingSize }}>
      <Chatbot
        show={boolean('Show', true)}
        onToggleShow={action('onToggleShow actioned')}
        onSubmitMessage={action('onSubmitMessage actioned')}
        onReply={action('onReply actioned')}
        messages={object('Messages', textMessages)}
        isTyping={boolean('Is typing', false)}
      />
    </div>
  ))
  .add('With messages and typing', () => (
    <div style={{ padding: paddingSize }}>
      <Chatbot
        show={boolean('Show', true)}
        onToggleShow={action('onToggleShow actioned')}
        onSubmitMessage={action('onSubmitMessage actioned')}
        onReply={action('onReply actioned')}
        messages={object('Messages', textMessages)}
        isTyping={boolean('Is typing', true)}
      />
    </div>
  ))
  .add('With quick reply messages', () => (
    <div style={{ padding: paddingSize }}>
      <Chatbot
        show={boolean('Show', true)}
        onToggleShow={action('onToggleShow actioned')}
        onSubmitMessage={action('onSubmitMessage actioned')}
        onReply={action('onReply actioned')}
        messages={object('Messages', quickRepliesMessages)}
        isTyping={boolean('Is typing', false)}
      />
    </div>
  ))
  .add('With cards message', () => (
    <div style={{ padding: paddingSize }}>
      <Chatbot
        show={boolean('Show', true)}
        onToggleShow={action('onToggleShow actioned')}
        onSubmitMessage={action('onSubmitMessage actioned')}
        onReply={action('onReply actioned')}
        messages={object('Messages', cardsMessages)}
        isTyping={boolean('Is typing', false)}
      />
    </div>
  ));
