import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import { paddingSize } from 'constants/storybook';

import EmptyView from '..';

storiesOf('Common/EmptyView', module)
  .addDecorator(withKnobs)
  .add('Default content', () => (
    <div style={{ padding: paddingSize }}>
      <EmptyView
        section={text('Section', 'Experience')}
        suggestion={text('Suggestion', 'Are you happy?')}
      />
    </div>
  ))
  .add('Custom', () => (
    <div style={{ padding: paddingSize }}>
      <EmptyView>
        Any custom content can be added to the Empty view component
        <br />
        <h3>For example h3 tag</h3>
        <p>For example p tag</p>
        <ul>
          For example ul tag:
          <li>For example li tag</li>
          <li>Another li tag</li>
          <li>And the last li tag</li>
        </ul>
        Also you can style everything as you want:
        <br />
        <span style={{ color: 'red' }}>Very </span>
        <span style={{ color: 'green' }}>colorful </span>
        <span style={{ color: 'blue' }}>text</span>
        <h1>Enjoy! :)</h1>
      </EmptyView>
    </div>
  ));
