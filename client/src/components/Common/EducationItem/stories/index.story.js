import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, array, date, object } from '@storybook/addon-knobs';

import { paddingSize } from 'constants/storybook';

import { educations } from 'components/Pages/Education/constants';

import EducationItem from '..';

storiesOf('Common/EducationItem', module)
  .addDecorator(withKnobs)
  .add('Not discovered', () => (
    <div style={{ padding: paddingSize }}>
      <EducationItem
        discovered={object('Discovered fields', {
          topic: false,
          time: false,
          activities: false,
        })}
        image={educations[0].image}
        schoolName={text('School name', educations[0].schoolName)}
        schoolLink={text('School link', educations[0].schoolLink)}
        topic={text('Topic', educations[0].topic)}
        degree={text('Degree', educations[0].degree)}
        description={text('Description', educations[0].description)}
        activities={array('Activities', educations[0].activities)}
        location={text('Location', educations[0].location)}
        start={date('Start date', educations[0].start)}
        finish={date('Finish date', educations[0].finish)}
      />
    </div>
  ))
  .add('Master\'s degree', () => (
    <div style={{ padding: paddingSize }}>
      <EducationItem
        discovered={object('Discovered fields', {
          topic: true,
          time: true,
          activities: true,
        })}
        image={educations[0].image}
        schoolName={text('School name', educations[0].schoolName)}
        schoolLink={text('School link', educations[0].schoolLink)}
        topic={text('Topic', educations[0].topic)}
        degree={text('Degree', educations[0].degree)}
        description={text('Description', educations[0].description)}
        activities={array('Activities', educations[0].activities)}
        location={text('Location', educations[0].location)}
        start={date('Start date', educations[0].start)}
        finish={date('Finish date', educations[0].finish)}
      />
    </div>
  ))
  .add('Bachelor\'s degree', () => (
    <div style={{ padding: paddingSize }}>
      <EducationItem
        discovered={object('Discovered fields', {
          topic: true,
          time: true,
          activities: true,
        })}
        image={educations[1].image}
        schoolName={text('School name', educations[1].schoolName)}
        schoolLink={text('School link', educations[1].schoolLink)}
        topic={text('Topic', educations[1].topic)}
        degree={text('Degree', educations[1].degree)}
        description={text('Description', educations[1].description)}
        activities={array('Activities', educations[1].activities)}
        location={text('Location', educations[1].location)}
        start={date('Start date', educations[1].start)}
        finish={date('Finish date', educations[1].finish)}
      />
    </div>
  ));
