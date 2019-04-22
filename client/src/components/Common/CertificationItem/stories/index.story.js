import React from 'react';
import { storiesOf } from '@storybook/react';

import CertificationItem from '..';
import { UC_B6BARC8V, C_11467555, GH93LKLL72BR } from '../../../../images';

const data = {
  udemy: {
    title: 'Advanced React and Redux: 2018 Edition',
    image: UC_B6BARC8V,
    url: 'https://www.udemy.com/certificate/UC-B6BARC8V/',
  },
  codecademy: {
    title: 'Test-Driven Development',
    image: C_11467555,
    url: 'https://www.credential.net/e524eujo',
  },
  coursera: {
    title: 'Graph Search, Shortest Paths, and Data Structures',
    image: GH93LKLL72BR,
    url: 'https://www.coursera.org/account/accomplishments/certificate/GH93LKLL72BR',
  },
};

const WrappedComponent = props => (
  <div style={{ maxWidth: '600px', padding: '25px' }}>
    <CertificationItem {...props} />
  </div>
);

storiesOf('Common/CertificationItem', module)
  .add('Udemy Certificate', () => WrappedComponent({ ...data.udemy }))
  .add('Codecademy Certificate', () => WrappedComponent({ ...data.codecademy }))
  .add('Coursera Sertificate', () => WrappedComponent({ ...data.coursera }));

