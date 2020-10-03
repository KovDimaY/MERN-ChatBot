import React from 'react';
import { create } from 'react-test-renderer';

import ExperienceItem from '../../ExperienceItem';

jest.mock('utils/common', () => ({
  getDuration: jest.fn(() => 'getDuration mocked result'),
  showHiddenText: jest.fn((text, show) => (show ? text : '***')),
}));

const mockComponent = props => <ExperienceItem {...props} />;

describe('components/Common/<ExperienceItem />', () => {
  it('should render component with basic data discovered', () => {
    const props = {
      image: 'image',
      companyName: 'companyName',
      companyLink: 'companyLink',
      position: 'position',
      location: 'location',
      description: 'description',
      start: 'start',
      discovered: {
        responsibilities: true,
        technologies: true,
        duration: true,
        position: true,
        description: true,
      },
    };
    const tree = create(mockComponent(props)).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render component with all the data discovered', () => {
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
      responsibilities: [
        'responsibilities1',
        'responsibilities2',
        'responsibilities3',
      ],
      discovered: {
        responsibilities: true,
        technologies: true,
        duration: true,
        position: true,
        description: true,
      },
    };
    const tree = create(mockComponent(props)).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render component with all the data not discovered', () => {
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
      responsibilities: [
        'responsibilities1',
        'responsibilities2',
        'responsibilities3',
      ],
      discovered: {
        responsibilities: false,
        technologies: false,
        duration: false,
        position: false,
        description: false,
      },
    };
    const tree = create(mockComponent(props)).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
