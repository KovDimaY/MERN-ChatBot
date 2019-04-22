import React from 'react';
import { storiesOf } from '@storybook/react';

import { Chatbot } from '..';

storiesOf('Chatbot', module)
  .add('Without messages', () => (
    <Chatbot location={{ pathname: 'pathname' }} />
  ));
