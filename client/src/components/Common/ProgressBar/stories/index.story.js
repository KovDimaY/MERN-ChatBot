import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, boolean } from '@storybook/addon-knobs';

import { paddingSize } from 'constants/storybook';

import ProgressBar from '..';

storiesOf('Common/ProgressBar', module)
  .addDecorator(withKnobs)
  .add('10% discovered', () => (
    <div style={{ padding: paddingSize }}>
      <ProgressBar
        percent={number('Percents', 10)}
        margintTop={boolean('Reduced margin', false)}
      />
    </div>
  ))
  .add('40% discovered', () => (
    <div style={{ padding: paddingSize }}>
      <ProgressBar
        percent={number('Percents', 40)}
        margintTop={boolean('Reduced margin', false)}
      />
    </div>
  ))
  .add('60% discovered', () => (
    <div style={{ padding: paddingSize }}>
      <ProgressBar
        percent={number('Percents', 60)}
        margintTop={boolean('Reduced margin', false)}
      />
    </div>
  ))
  .add('80% discovered', () => (
    <div style={{ padding: paddingSize }}>
      <ProgressBar
        percent={number('Percents', 80)}
        margintTop={boolean('Reduced margin', false)}
      />
    </div>
  ));
