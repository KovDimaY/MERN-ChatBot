import React from 'react';
import { create } from 'react-test-renderer';

import Projects from '../../Projects';

jest.mock('../../../Common/EmptyView', () => 'EmptyView');

const mockComponent = props => (
  <Projects {...props} />
);

describe('components/pages/<Projects />', () => {
  it('should render component', () => {
    const tree = create(mockComponent()).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
