import React from 'react';
import { create } from 'react-test-renderer';

import { ProjectsPageContainer } from '../../ProjectsPage';

jest.mock('components/Pages/Projects', () => 'ProjectsPage');

const mockComponent = props => <ProjectsPageContainer {...props} />;

describe('containers/<ProjectsPage />', () => {
  it('should render component', () => {
    const props = {
      discovered: true,
      trips: {},
      charts: {},
      chat: {},
      memory: {},
      kovdimay: {},
    };
    const tree = create(mockComponent(props)).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
