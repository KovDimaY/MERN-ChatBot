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
    <LanguageItem {...data.ukrainian} />
  ))
  .add('Russian', () => (
    <LanguageItem {...data.russian} />
  ))
  .add('English', () => (
    <LanguageItem {...data.english} />
  ))
  .add('Spanish', () => (
    <LanguageItem {...data.spanish} />
  ));
