import React from 'react';
import { create } from 'react-test-renderer';

import LanguageItem from '../../LanguageItem';

const mockComponent = props => (
  <LanguageItem {...props} />
);

describe('components/Common/<LanguageItem />', () => {
  it('should render component', () => {
    const props = {
      data: {
        name: 'name',
        image: 'image',
        level: 'level',
      },
    };
    const tree = create(mockComponent(props)).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
