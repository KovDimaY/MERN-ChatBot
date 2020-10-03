import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, object } from '@storybook/addon-knobs';

import { marginSize, paddingSize } from 'constants/storybook';

import QuickReplies from '..';
import { quickRepliesData as data } from './mockData';

storiesOf('QuickReplies', module)
  .addDecorator(withKnobs)
  .add('No width limit', () => (
    <div style={{ padding: paddingSize }}>
      <QuickReplies
        data={object('Data', data)}
        onReply={action('onReply actioned')}
      />
    </div>
  ))
  .add('Real life example', () => (
    <div
      style={{
        margin: marginSize,
        maxWidth: '450px',
        border: '1px solid black',
      }}
    >
      <QuickReplies
        data={object('Data', data)}
        onReply={action('onReply actioned')}
      />
    </div>
  ));
