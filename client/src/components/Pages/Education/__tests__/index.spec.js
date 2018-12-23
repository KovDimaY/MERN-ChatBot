import React from 'react';
import { create } from 'react-test-renderer';

import Education from '../../Education';

jest.mock('../../../Common/EmptyView', () => 'EmptyView');

const mockComponent = props => (
  <Education {...props} />
);

describe('components/pages/<Education />', () => {
  it('should render component', () => {
    const tree = create(mockComponent()).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
