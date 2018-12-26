import React from 'react';
import { create } from 'react-test-renderer';

import CardItem from '../../Cards/CardItem';

const mockComponent = props => (
  <CardItem {...props} />
);

describe('components/Cards/<CardItem />', () => {
  it('should render component', () => {
    const props = {
      data: {
        title: 'title',
        image: 'image',
        description: 'description',
        link: 'link',
      },
    };
    const tree = create(mockComponent(props)).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
