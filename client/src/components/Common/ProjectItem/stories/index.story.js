import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, array } from '@storybook/addon-knobs';

import ProjectItem from '..';
import { projects } from '../../../Pages/Projects/constants';

storiesOf('Common/ProjectItem', module)
  .addDecorator(withKnobs)
  .add('TripReviewer', () => (
    <div style={{ padding: '25px' }}>
      <ProjectItem
        image={projects[0].image}
        name={text('Name', projects[0].name)}
        description={text('Description', projects[0].description)}
        tools={array('Tools', projects[0].tools)}
        url={text('URL', projects[0].url)}
      />
    </div>
  ))
  .add('SimpleChat', () => (
    <div style={{ padding: '25px' }}>
      <ProjectItem
        image={projects[1].image}
        name={text('Name', projects[1].name)}
        description={text('Description', projects[1].description)}
        tools={array('Tools', projects[1].tools)}
        url={text('URL', projects[1].url)}
      />
    </div>
  ))
  .add('React-Highcharts Playground', () => (
    <div style={{ padding: '25px' }}>
      <ProjectItem
        image={projects[2].image}
        name={text('Name', projects[2].name)}
        description={text('Description', projects[2].description)}
        tools={array('Tools', projects[2].tools)}
        url={text('URL', projects[2].url)}
      />
    </div>
  ))
  .add('Memory Game', () => (
    <div style={{ padding: '25px' }}>
      <ProjectItem
        image={projects[3].image}
        name={text('Name', projects[3].name)}
        description={text('Description', projects[3].description)}
        tools={array('Tools', projects[3].tools)}
        url={text('URL', projects[3].url)}
      />
    </div>
  ))
  .add('KovDimaY', () => (
    <div style={{ padding: '25px' }}>
      <ProjectItem
        image={projects[0].image}
        name={text('Name', projects[4].name)}
        description={text('Description', projects[4].description)}
        tools={array('Tools', projects[4].tools)}
        url={text('URL', projects[4].url)}
      />
    </div>
  ));
