import React from 'react';
import { storiesOf } from '@storybook/react';

import DotsAnimation from '..';

storiesOf('Common/DotsAnimation', module)
  .add('Small', () => (
    <div style={{ background: 'black', display: 'inline-block' }}>
      <DotsAnimation width={300} height={400} />
    </div>
  ))
  .add('Medium', () => (
    <div style={{ background: 'black', display: 'inline-block' }}>
      <DotsAnimation width={800} height={600} />
    </div>
  ))
  .add('Big', () => (
    <div style={{ background: 'black', display: 'inline-block' }}>
      <DotsAnimation width={1300} height={700} />
    </div>
  ));
