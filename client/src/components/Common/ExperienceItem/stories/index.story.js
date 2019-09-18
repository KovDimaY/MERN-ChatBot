import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, array, date, object } from '@storybook/addon-knobs';

import { paddingSize } from 'constants/storybook';

import { experiences } from 'components/Pages/Experience/constants';

import ExperienceItem from '..';

storiesOf('Common/ExperienceItem', module)
  .addDecorator(withKnobs)
  .add('Not discovered technologies', () => (
    <div style={{ padding: paddingSize }}>
      <ExperienceItem
        discovered={object('Discovered fields', {
          technologies: false,
          duration: false,
          position: false,
          description: false,
        })}
        image={experiences[0].image}
        companyName={text('Company name', experiences[0].companyName)}
        companyLink={text('Company link', experiences[0].companyLink)}
        position={text('Position', experiences[0].position)}
        description={text('Description', experiences[0].description)}
        tools={array('Tools', experiences[0].tools)}
        location={text('Location', experiences[0].location)}
        start={date('Start date', experiences[0].start)}
      />
    </div>
  ))
  .add('Not discovered responsibilities', () => (
    <div style={{ padding: paddingSize }}>
      <ExperienceItem
        discovered={object('Discovered fields', {
          responsibilities: false,
          duration: false,
          position: false,
          description: false,
        })}
        image={experiences[2].image}
        companyName={text('Company name', experiences[2].companyName)}
        companyLink={text('Company link', experiences[2].companyLink)}
        position={text('Position', experiences[2].position)}
        description={text('Description', experiences[2].description)}
        responsibilities={array('Responsibilities', experiences[2].responsibilities)}
        location={text('Location', experiences[2].location)}
        start={date('Start date', experiences[2].start)}
        finish={date('Finish date', experiences[2].finish)}
      />
    </div>
  ))
  .add('Cornerjob', () => (
    <div style={{ padding: paddingSize }}>
      <ExperienceItem
        image={experiences[0].image}
        companyName={text('Company name', experiences[0].companyName)}
        companyLink={text('Company link', experiences[0].companyLink)}
        position={text('Position', experiences[0].position)}
        description={text('Description', experiences[0].description)}
        tools={array('Tools', experiences[0].tools)}
        location={text('Location', experiences[0].location)}
        start={date('Start date', experiences[0].start)}
      />
    </div>
  ))
  .add('Bigfinite Inc', () => (
    <div style={{ padding: paddingSize }}>
      <ExperienceItem
        image={experiences[1].image}
        companyName={text('Company name', experiences[1].companyName)}
        companyLink={text('Company link', experiences[1].companyLink)}
        position={text('Position', experiences[1].position)}
        description={text('Description', experiences[1].description)}
        tools={array('Tools', experiences[1].tools)}
        location={text('Location', experiences[1].location)}
        start={date('Start date', experiences[1].start)}
        finish={date('Finish date', experiences[1].finish)}
      />
    </div>
  ))
  .add('Enixan Entertainment', () => (
    <div style={{ padding: paddingSize }}>
      <ExperienceItem
        image={experiences[2].image}
        companyName={text('Company name', experiences[2].companyName)}
        companyLink={text('Company link', experiences[2].companyLink)}
        position={text('Position', experiences[2].position)}
        description={text('Description', experiences[2].description)}
        responsibilities={array('Responsibilities', experiences[2].responsibilities)}
        location={text('Location', experiences[2].location)}
        start={date('Start date', experiences[2].start)}
        finish={date('Finish date', experiences[2].finish)}
      />
    </div>
  ))
  .add('MBA Strategy', () => (
    <div style={{ padding: paddingSize }}>
      <ExperienceItem
        image={experiences[3].image}
        companyName={text('Company name', experiences[3].companyName)}
        companyLink={text('Company link', experiences[3].companyLink)}
        position={text('Position', experiences[3].position)}
        description={text('Description', experiences[3].description)}
        responsibilities={array('Responsibilities', experiences[3].responsibilities)}
        location={text('Location', experiences[3].location)}
        start={date('Start date', experiences[3].start)}
        finish={date('Finish date', experiences[3].finish)}
      />
    </div>
  ))
  .add('Icicle Seafoods', () => (
    <div style={{ padding: paddingSize }}>
      <ExperienceItem
        image={experiences[4].image}
        companyName={text('Company name', experiences[4].companyName)}
        companyLink={text('Company link', experiences[4].companyLink)}
        position={text('Position', experiences[4].position)}
        description={text('Description', experiences[4].description)}
        location={text('Location', experiences[4].location)}
        start={date('Start date', experiences[4].start)}
        finish={date('Finish date', experiences[4].finish)}
      />
    </div>
  ));
