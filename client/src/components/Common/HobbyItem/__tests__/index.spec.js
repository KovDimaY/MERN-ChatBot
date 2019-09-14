import React from 'react';
import { create } from 'react-test-renderer';

import HobbyItem from '../../HobbyItem';

jest.mock('utils/common', () => ({
  showHiddenText: jest.fn((text, param) => param ? text : '***'),
}));

const mockComponent = props => (
  <HobbyItem {...props} />
);

describe('components/Common/<HobbyItem />', () => {
  it('should render component with no discovered and no discoveredDetails', () => {
    const props = {
      name: 'name',
      image: 'image',
      description: 'description',
      discovered: false,
      discoveredDetails: false,
    };
    const tree = create(mockComponent(props)).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render component with no discovered and discoveredDetails', () => {
    const props = {
      name: 'name',
      image: 'image',
      description: 'description',
      discovered: false,
      discoveredDetails: true,
    };
    const tree = create(mockComponent(props)).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render component with discovered and no discoveredDetails', () => {
    const props = {
      name: 'name',
      image: 'image',
      description: 'description',
      discovered: true,
      discoveredDetails: false,
    };
    const tree = create(mockComponent(props)).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render component with discovered and discoveredDetails', () => {
    const props = {
      name: 'name',
      image: 'image',
      description: 'description',
      discovered: true,
      discoveredDetails: true,
    };
    const tree = create(mockComponent(props)).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
