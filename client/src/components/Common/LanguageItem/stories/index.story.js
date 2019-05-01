import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import { paddingSize } from '../../../../constants/storybook';

import LanguageItem from '..';
import { languages } from '../../../Pages/Home/constants';

storiesOf('Common/LanguageItem', module)
  .addDecorator(withKnobs)
  .add('Ukrainian', () => (
    <div style={{ padding: paddingSize }}>
      <LanguageItem
        image={languages[0].image}
        name={text('Name', languages[0].name)}
        level={text('Level', languages[0].level)}
      />
    </div>
  ))
  .add('Russian', () => (
    <div style={{ padding: paddingSize }}>
      <LanguageItem
        image={languages[1].image}
        name={text('Name', languages[1].name)}
        level={text('Level', languages[1].level)}
      />
    </div>
  ))
  .add('English', () => (
    <div style={{ padding: paddingSize }}>
      <LanguageItem
        image={languages[2].image}
        name={text('Name', languages[2].name)}
        level={text('Level', languages[2].level)}
      />
    </div>
  ))
  .add('Spanish', () => (
    <div style={{ padding: paddingSize }}>
      <LanguageItem
        image={languages[3].image}
        name={text('Name', languages[3].name)}
        level={text('Level', languages[3].level)}
      />
    </div>
  ));
