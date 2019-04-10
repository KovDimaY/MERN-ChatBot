import React from 'react';
import { create } from 'react-test-renderer';

import EducationItem from '../../EducationItem';

jest.mock('../../../../utils/common', () => ({
  getDuration: jest.fn(() => 'getDuration mocked result'),
}));

const mockComponent = props => (
  <EducationItem {...props} />
);

describe('components/Common/<EducationItem />', () => {
  it('should render component with required props', () => {
    const props = {
      image: 'image',
      schoolName: 'schoolName',
      schoolLink: 'schoolLink',
      degree: 'degree',
      location: 'location',
      start: new Date('2009-09'),
    };
    const tree = create(mockComponent(props)).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render component with all possible props', () => {
    const props = {
      image: 'image',
      schoolName: 'schoolName',
      schoolLink: 'schoolLink',
      degree: 'degree',
      location: 'location',
      start: new Date('2009-09'),
      finish: new Date('2015-05'),
      description: 'description',
      activities: ['activities1', 'activities2', 'activities3'],
    };
    const tree = create(mockComponent(props)).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
