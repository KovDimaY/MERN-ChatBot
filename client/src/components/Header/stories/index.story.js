import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';

import Header from '..';

storiesOf('Header', module)
  .add('Default', () => (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  ));
