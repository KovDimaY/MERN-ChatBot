import React from 'react';
import { create } from 'react-test-renderer';

import HobbyItem from '../../HobbyItem';

const mockComponent = props => (
  <HobbyItem {...props} />
);

describe('components/Common/<HobbyItem />', () => {
  it('should render component', () => {
    const props = {
      data: {
        name: 'name',
        image: 'image',
        description: 'description',
      },
    };
    const tree = create(mockComponent(props)).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
