import React from 'react';
import { storiesOf } from '@storybook/react';

import LanguageItem from '..';
import { data } from './mockData';

const WrappedComponent = props => (
  <div style={{ padding: '25px' }}>
    <LanguageItem {...props} />
  </div>
);

storiesOf('Common/LanguageItem', module)
  .add('Ukrainian', () => WrappedComponent(data.ukrainian))
  .add('Russian', () => WrappedComponent(data.russian))
  .add('English', () => WrappedComponent(data.english))
  .add('Spanish', () => WrappedComponent(data.spanish));
