import React from 'react';
import { create } from 'react-test-renderer';

import ExperienceItem from '../../ExperienceItem';

jest.mock('../../../../utils/common', () => ({
  getDuration: jest.fn(() => 'getDuration mocked result'),
}));

const mockComponent = props => (
  <ExperienceItem {...props} />
);

describe('components/Common/<ExperienceItem />', () => {
  it('should render component with basic data', () => {
    const props = {
      image: 'image',
      companyName: 'companyName',
      companyLink: 'companyLink',
      position: 'position',
      location: 'location',
      description: 'description',
      start: 'start',
    };
    const tree = create(mockComponent(props)).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render component with all the data', () => {
    const props = {
      image: 'image',
      companyName: 'companyName',
      companyLink: 'companyLink',
      position: 'position',
      location: 'location',
      description: 'description',
      start: 'start',
      finish: 'finish',
      tools: ['tools1', 'tools2'],
      responsibilities: ['responsibilities1', 'responsibilities2', 'responsibilities3'],
    };
    const tree = create(mockComponent(props)).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
