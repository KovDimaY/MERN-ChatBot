import React from 'react';
import { storiesOf } from '@storybook/react';

import EmptyView from '..';

storiesOf('Common/EmptyView', module)
  .add('Experience Section', () => (
    <div style={{ padding: '25px' }}>
      <EmptyView section="Experience" />
    </div>
  ))
  .add('Custom', () => (
    <div style={{ padding: '25px' }}>
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
