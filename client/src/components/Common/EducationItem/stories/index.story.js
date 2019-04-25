import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, array, date } from '@storybook/addon-knobs';

import EducationItem from '..';
import { educations } from '../../../Pages/Education/constants';

storiesOf('Common/EducationItem', module)
  .addDecorator(withKnobs)
  .add('Master\'s degree', () => (
    <div style={{ padding: '25px' }}>
      <EducationItem
        image={educations[0].image}
        schoolName={text('School name', educations[0].schoolName)}
        schoolLink={text('School link', educations[0].schoolLink)}
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
    <div style={{ padding: '25px' }}>
      <EducationItem
        image={educations[0].image}
        schoolName={text('School name', educations[1].schoolName)}
        schoolLink={text('School link', educations[1].schoolLink)}
        degree={text('Degree', educations[1].degree)}
        description={text('Description', educations[1].description)}
        activities={array('Activities', educations[1].activities)}
        location={text('Location', educations[1].location)}
        start={date('Start date', educations[1].start)}
        finish={date('Finish date', educations[1].finish)}
      />
    </div>
  ));
