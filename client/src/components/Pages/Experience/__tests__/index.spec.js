import React from 'react';
import { create } from 'react-test-renderer';

import Experience from '../../Experience';

jest.mock('../../../Common/EmptyView', () => 'EmptyView');

const mockComponent = props => (
  <Experience {...props} />
);

describe('components/pages/<Experience />', () => {
  it('should render component', () => {
    const tree = create(mockComponent()).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
