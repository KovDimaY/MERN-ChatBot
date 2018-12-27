import React from 'react';
import { create } from 'react-test-renderer';
import { mount } from 'enzyme';

import Canvas from '../../Canvas';

jest.mock('../../Canvas/PureCanvas', () => 'PureCanvas');

const mockComponent = props => (
  <Canvas {...props} />
);

describe('components/Common/<Canvas />', () => {
  it('should render component', () => {
    const props = {
      width: 100,
      height: 100,
    };
    const tree = create(mockComponent(props)).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should call draw with context when componentDidMount is called', () => {
    const context = 'context';
    const draw = jest.fn();
    const props = { draw };
    const instance = mount(mockComponent(props)).instance();

    instance.ctx = context;
    instance.componentDidUpdate();

    expect(draw).toHaveBeenCalledWith(context);
  });

  it('should save context when saveContext is called', () => {
    const context = 'context';
    const instance = mount(mockComponent()).instance();

    instance.saveContext(context);

    expect(instance.ctx).toEqual(context);
  });
});
