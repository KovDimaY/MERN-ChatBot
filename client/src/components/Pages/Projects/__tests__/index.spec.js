import React from 'react';
import { create } from 'react-test-renderer';

import Projects from '../../Projects';

jest.mock('components/Common/EmptyView', () => 'EmptyView');
jest.mock('components/Common/ProgressBar', () => 'ProgressBar');
jest.mock('components/Common/ProjectItem', () => 'ProjectItem');

const mockComponent = props => <Projects {...props} />;

describe('components/Pages/<Projects />', () => {
  it('should render component not discovered', () => {
    const props = { discovered: false };
    const tree = create(mockComponent(props)).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render component discovered', () => {
    const props = {
      discovered: true,
      discoveryPercent: 50,
    };
    const tree = create(mockComponent(props)).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
