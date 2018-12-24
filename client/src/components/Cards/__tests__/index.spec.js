import React from 'react';
import { create } from 'react-test-renderer';

import Cards from '../../Cards';

jest.mock('../../Cards/CardItem', () => 'CardItem');

const mockComponent = props => (
  <Cards {...props} />
);

describe('components/<Cards />', () => {
  it('should render component with no data', () => {
    const tree = create(mockComponent({})).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render component with data', () => {
    const props = {
      data: {
        value: [
          { id: 'id-1' },
          { id: 'id-2' },
          { id: 'id-3c' },
        ],
      },
    };
    const tree = create(mockComponent(props)).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
