import React from 'react';
import { create } from 'react-test-renderer';

import NotFound from '../../404';

jest.mock('react-tilt', () => 'Tilt');
jest.mock('react-router-dom', () => ({ Link: 'Link' }));

const mockComponent = props => <NotFound {...props} />;

describe('components/Pages/<NotFound />', () => {
  it('should render component', () => {
    const tree = create(mockComponent()).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
