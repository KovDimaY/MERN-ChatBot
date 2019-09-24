import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import { paddingSize } from 'constants/storybook';
import { languages } from 'components/Pages/Home/constants';

import LanguageItem from '..';

storiesOf('Common/LanguageItem', module)
  .addDecorator(withKnobs)
  .add('Hidden', () => (
    <div style={{ padding: paddingSize }}>
      <LanguageItem
        image={text('Image', languages[0].image)}
        name={text('Name', 'Whatever')}
        level={text('Level', 'This will be hidden')}
        discovered={boolean('Discovered', false)}
      />
    </div>
  ))
  .add('Ukrainian', () => (
    <div style={{ padding: paddingSize }}>
      <LanguageItem
        image={languages[0].image}
        name={text('Name', languages[0].name)}
        level={text('Level', languages[0].level)}
        discovered={boolean('Discovered', true)}
      />
    </div>
  ))
  .add('Russian', () => (
    <div style={{ padding: paddingSize }}>
      <LanguageItem
        image={languages[1].image}
        name={text('Name', languages[1].name)}
        level={text('Level', languages[1].level)}
        discovered={boolean('Discovered', true)}
      />
    </div>
  ))
  .add('English', () => (
    <div style={{ padding: paddingSize }}>
      <LanguageItem
        image={languages[2].image}
        name={text('Name', languages[2].name)}
        level={text('Level', languages[2].level)}
        discovered={boolean('Discovered', true)}
      />
    </div>
  ))
  .add('Spanish', () => (
    <div style={{ padding: paddingSize }}>
      <LanguageItem
        image={languages[3].image}
        name={text('Name', languages[3].name)}
        level={text('Level', languages[3].level)}
        discovered={boolean('Discovered', true)}
      />
    </div>
  ));
