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

storiesOf('Common/LanguageItem', module)
  .add('Ukrainian', () => (
    <div style={{ padding: '25px' }}>
      <LanguageItem {...data.ukrainian} />
    </div>
  ))
  .add('Russian', () => (
    <div style={{ padding: '25px' }}>
      <LanguageItem {...data.russian} />
    </div>
  ))
  .add('English', () => (
    <div style={{ padding: '25px' }}>
      <LanguageItem {...data.english} />
    </div>
  ))
  .add('Spanish', () => (
    <div style={{ padding: '25px' }}>
      <LanguageItem {...data.spanish} />
    </div>
  ));
