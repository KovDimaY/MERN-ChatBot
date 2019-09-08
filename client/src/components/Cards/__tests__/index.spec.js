import React from 'react';
import { create } from 'react-test-renderer';

import Cards from '../../Cards';

jest.mock('../../Common/CardItem', () => 'CardItem');

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
          {
            id: 'id-1',
            title: 'title-1',
            image: 'image-1',
            description: 'description-1',
            link: 'link-1',
          },
          {
            id: 'id-2',
            title: 'title-2',
            image: 'image-2',
            description: 'description-2',
            link: 'link-2',
          },
          {
            id: 'id-3',
            title: 'title-3',
            image: 'image-3',
            description: 'description-3',
            link: 'link-3',
          },
        ],
      },
    };
    const tree = create(mockComponent(props)).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
