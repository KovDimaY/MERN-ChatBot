import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import { paddingSize } from 'constants/storybook';
import { UC_B6BARC8V, C_11467555, GH93LKLL72BR } from 'images';

import CertificationItem from '..';

storiesOf('Common/CertificationItem', module)
  .addDecorator(withKnobs)
  .add('Not discovered', () => (
    <div style={{ maxWidth: '600px', padding: paddingSize }}>
      <CertificationItem
        title={text('Title', 'This text will be hidden until user discovers it')}
        image={UC_B6BARC8V}
        url={text('URL', 'This url will not be clickable untill user discovers it')}
        discovered={boolean('Discovered', false)}
      />
    </div>
  ))
  .add('Udemy Certificate', () => (
    <div style={{ maxWidth: '600px', padding: paddingSize }}>
      <CertificationItem
        title={text('Title', 'Advanced React and Redux: 2018 Edition')}
        image={UC_B6BARC8V}
        url={text('URL', 'https://www.udemy.com/certificate/UC-B6BARC8V/')}
        discovered={boolean('Discovered', true)}
      />
    </div>
  ))
  .add('Codecademy Certificate', () => (
    <div style={{ maxWidth: '600px', padding: paddingSize }}>
      <CertificationItem
        title={text('Title', 'Test-Driven Development')}
        image={C_11467555}
        url={text('URL', 'https://www.credential.net/e524eujo')}
        discovered={boolean('Discovered', true)}
      />
    </div>
  ))
  .add('Coursera Sertificate', () => (
    <div style={{ maxWidth: '600px', padding: paddingSize }}>
      <CertificationItem
        title={text('Title', 'Graph Search, Shortest Paths, and Data Structures')}
        image={GH93LKLL72BR}
        url={text('URL', 'https://www.coursera.org/account/accomplishments/certificate/GH93LKLL72BR')}
        discovered={boolean('Discovered', true)}
      />
    </div>
  ));

