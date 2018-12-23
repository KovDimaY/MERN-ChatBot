import React from 'react';
import { create } from 'react-test-renderer';

import {
  background,
  botAvatar,
  userAvatar,
} from '../index';

const mockComponent = image => (
  <img src={image} alt="test" />
);

describe('components/<App />', () => {
  it('should render background image', () => {
    const tree = create(mockComponent(background)).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render botAvatar image', () => {
    const tree = create(mockComponent(botAvatar)).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render userAvatar image', () => {
    const tree = create(mockComponent(userAvatar)).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
