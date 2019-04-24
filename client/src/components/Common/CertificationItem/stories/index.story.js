import React from 'react';
import { storiesOf } from '@storybook/react';

import CertificationItem from '..';
import { data } from './mockData';

const WrappedComponent = props => (
  <div style={{ maxWidth: '600px', padding: '25px' }}>
    <CertificationItem {...props} />
  </div>
);

storiesOf('Common/CertificationItem', module)
  .add('Udemy Certificate', () => WrappedComponent({ ...data.udemy }))
  .add('Codecademy Certificate', () => WrappedComponent({ ...data.codecademy }))
  .add('Coursera Sertificate', () => WrappedComponent({ ...data.coursera }));

