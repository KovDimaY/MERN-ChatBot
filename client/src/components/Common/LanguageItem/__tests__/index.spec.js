import React from 'react';
import { create } from 'react-test-renderer';

import LanguageItem from '../../LanguageItem';

jest.mock('utils/common', () => ({
  showHiddenText: jest.fn((text, param) => param ? text : '***'),
}));

const mockComponent = props => (
  <LanguageItem {...props} />
);

describe('components/Common/<LanguageItem />', () => {
  it('should render component with no discovered', () => {
    const props = {
      name: 'name',
      image: 'image',
      level: 'level',
      discovered: false,
    };
    const tree = create(mockComponent(props)).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render component with discovered', () => {
    const props = {
      name: 'name',
      image: 'image',
      level: 'level',
      discovered: true,
    };
    const tree = create(mockComponent(props)).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
