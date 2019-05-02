import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import { paddingSize } from '../../../../constants/storybook';

import HobbyItem from '..';
import { hobbies } from '../../../Pages/Home/constants';

storiesOf('Common/HobbyItem', module)
  .addDecorator(withKnobs)
  .add('Programming', () => (
    <div style={{ padding: paddingSize }}>
      <HobbyItem
        image={hobbies[0].image}
        name={text('Name', hobbies[0].name)}
        description={text('Description', hobbies[0].description)}
      />
    </div>
  ))
  .add('Sports', () => (
    <div style={{ padding: paddingSize }}>
      <HobbyItem
        image={hobbies[1].image}
        name={text('Name', hobbies[1].name)}
        description={text('Description', hobbies[1].description)}
      />
    </div>
  ))
  .add('Puzzles', () => (
    <div style={{ padding: paddingSize }}>
      <HobbyItem
        image={hobbies[2].image}
        name={text('Name', hobbies[2].name)}
        description={text('Description', hobbies[2].description)}
      />
    </div>
  ))
  .add('Numismatics', () => (
    <div style={{ padding: paddingSize }}>
      <HobbyItem
        image={hobbies[3].image}
        name={text('Name', hobbies[3].name)}
        description={text('Description', hobbies[3].description)}
      />
    </div>
  ))
  .add('Photography', () => (
    <div style={{ padding: paddingSize }}>
      <HobbyItem
        image={hobbies[4].image}
        name={text('Name', hobbies[4].name)}
        description={text('Description', hobbies[4].description)}
      />
    </div>
  ));
