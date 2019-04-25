import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import CertificationItem from '..';
import { UC_B6BARC8V, C_11467555, GH93LKLL72BR } from '../../../../images';

storiesOf('Common/CertificationItem', module)
  .addDecorator(withKnobs)
  .add('Udemy Certificate', () => (
    <div style={{ maxWidth: '600px', padding: '25px' }}>
      <CertificationItem
        title={text('Title', 'Advanced React and Redux: 2018 Edition')}
        image={UC_B6BARC8V}
        url={text('URL', 'https://www.udemy.com/certificate/UC-B6BARC8V/')}
      />
    </div>
  ))
  .add('Codecademy Certificate', () => (
    <div style={{ maxWidth: '600px', padding: '25px' }}>
      <CertificationItem
        title={text('Title', 'Test-Driven Development')}
        image={C_11467555}
        url={text('URL', 'https://www.credential.net/e524eujo')}
      />
    </div>
  ))
  .add('Coursera Sertificate', () => (
    <div style={{ maxWidth: '600px', padding: '25px' }}>
      <CertificationItem
        title={text('Title', 'Graph Search, Shortest Paths, and Data Structures')}
        image={GH93LKLL72BR}
        url={text('URL', 'https://www.coursera.org/account/accomplishments/certificate/GH93LKLL72BR')}
      />
    </div>
  ));

