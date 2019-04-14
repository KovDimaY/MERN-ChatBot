import React from 'react';
import { create } from 'react-test-renderer';

import ProjectItem from '../../ProjectItem';

const mockComponent = props => (
  <ProjectItem {...props} />
);

describe('components/Common/<ProjectItem />', () => {
  it('should render component with required props', () => {
    const props = {
      image: 'image',
      name: 'name',
      url: 'url',
      description: 'description',
    };
    const tree = create(mockComponent(props)).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render component with all possible props', () => {
    const props = {
      image: 'image',
      name: 'name',
      url: 'url',
      description: 'description',
      tools: ['tool1', 'tool2', 'tool3'],
    };
    const tree = create(mockComponent(props)).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
