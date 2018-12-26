import React from 'react';
import { create } from 'react-test-renderer';

import Skills from '../../Skills';

jest.mock('../../../Common/EmptyView', () => 'EmptyView');

const mockComponent = props => (
  <Skills {...props} />
);

describe('components/Pages/<Skills />', () => {
  it('should render component', () => {
    const tree = create(mockComponent()).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
