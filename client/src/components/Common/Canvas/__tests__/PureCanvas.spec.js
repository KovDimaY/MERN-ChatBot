import React from 'react';
import { create } from 'react-test-renderer';
import { mount } from 'enzyme';

import PureCanvas from '../PureCanvas';

const mockComponent = props => (
  <PureCanvas {...props} />
);

describe('components/Common/Canvas/<PureCanvas />', () => {
  it('should render component', () => {
    const props = {
      width: 100,
      height: 100,
      contextRef: () => 'contextRef',
    };
    const tree = create(mockComponent(props)).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should update component when shouldComponentUpdate is called with new dimentions', () => {
    const props = {
      width: 100,
      height: 100,
      contextRef: () => 'contextRef',
    };
    const instance = mount(mockComponent(props)).instance();

    const result = instance.shouldComponentUpdate({ width: 200, height: 200 });

    expect(result).toBe(true);
  });

  it('should not update component when shouldComponentUpdate is called with the same dimentions', () => {
    const width = 100;
    const height = 100;
    const props = {
      contextRef: () => 'contextRef',
      width,
      height,
    };
    const instance = mount(mockComponent(props)).instance();

    const result = instance.shouldComponentUpdate({ width, height });

    expect(result).toBe(false);
  });
});
