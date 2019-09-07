import React from 'react';
import { create } from 'react-test-renderer';

import CardItem from '../../CardItem';

const mockComponent = props => (
  <CardItem {...props} />
);

describe('components/Common/<CardItem />', () => {
  it('should render component', () => {
    const props = {
      title: 'title',
      image: 'image',
      description: 'description',
      link: 'link',
    };
    const tree = create(mockComponent(props)).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render component without link', () => {
    const props = {
      title: 'title',
      image: 'image',
      description: 'description',
    };
    const tree = create(mockComponent(props)).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
