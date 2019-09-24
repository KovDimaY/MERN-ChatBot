import React from 'react';
import { create } from 'react-test-renderer';

import Experience from '../../Experience';

jest.mock('components/Common/EmptyView', () => 'EmptyView');
jest.mock('components/Common/ProgressBar', () => 'ProgressBar');
jest.mock('components/Common/ExperienceItem', () => 'ExperienceItem');

const mockComponent = props => (
  <Experience {...props} />
);

describe('components/Pages/<Experience />', () => {
  it('should render component when not discovered', () => {
    const props = {
      discovered: false,
    };
    const tree = create(mockComponent(props)).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render component when discovered', () => {
    const props = {
      discovered: true,
      discoveryPercent: 50,
    };
    const tree = create(mockComponent(props)).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
