import React from 'react';
import { create } from 'react-test-renderer';

import Home from '../../Home';

jest.mock('../../../Common/EmptyView', () => 'EmptyView');

const mockComponent = props => (
  <Home {...props} />
);

describe('components/pages/<Home />', () => {
  it('should render component', () => {
    const tree = create(mockComponent()).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
