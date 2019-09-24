import React from 'react';
import { create } from 'react-test-renderer';

import { ExperiencePageContainer } from '../../ExperiencePage';

jest.mock('components/Pages/Experience', () => 'ExperiencePage');

const mockComponent = props => (
  <ExperiencePageContainer {...props} />
);

describe('containers/<ExperiencePage />', () => {
  it('should render component', () => {
    const props = {
      discovered: true,
      cornerjob: {},
      bigfinite: {},
      enixan: {},
      mbas: {},
      icicle: {},
    };
    const tree = create(mockComponent(props)).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
