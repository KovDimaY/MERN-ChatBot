import React from 'react';
import { storiesOf } from '@storybook/react';

import LanguageItem from '..';
import { flagES, flagRU, flagUA, flagUS } from '../../../../images';

const data = {
  ukrainian: {
    name: 'Українська',
    image: flagUA,
    level: 'Native or bilingual proficiency',
  },
  russian: {
    name: 'Русский',
    image: flagRU,
    level: 'Native or bilingual proficiency',
  },
  english: {
    name: 'English',
    image: flagUS,
    level: 'Full professional proficiency',
  },
  spanish: {
    name: 'Español',
    image: flagES,
    level: 'Professional working proficiency',
  },
};

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
