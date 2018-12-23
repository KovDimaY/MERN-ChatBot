import React from 'react';
import { create } from 'react-test-renderer';
import { mount } from 'enzyme';

import Disclaimer from '../../Disclaimer';

jest.mock('react-router-dom', () => ({ Link: 'Link' }));
jest.mock('../../../Common/DotsAnimation', () => 'Animation');

const mockComponent = props => (
  <Disclaimer {...props} />
);

describe('components/pages/<Disclaimer />', () => {
  it('should render component', () => {
    const tree = create(mockComponent()).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should add listener and change mounted when componentDidMount is called', () => {
    const addEventListener = jest.fn();
    const instance = mount(mockComponent()).instance();

    window.addEventListener = addEventListener;
    instance.mounted = false;
    instance.componentDidMount();

    expect(instance.mounted).toEqual(true);
    expect(addEventListener).toHaveBeenCalled();
  });

  it('should remove listener and change mounted when componentWillUnmount is called', () => {
    const removeEventListener = jest.fn();
    const instance = mount(mockComponent()).instance();

    window.removeEventListener = removeEventListener;
    instance.mounted = true;
    instance.componentWillUnmount();

    expect(instance.mounted).toEqual(false);
    expect(removeEventListener).toHaveBeenCalled();
  });

  it('should call setState when updateDimentions is called and component is mounted', () => {
    const setState = jest.fn();
    const width = 800;
    const height = 600;
    const instance = mount(mockComponent()).instance();

    window.innerWidth = width;
    window.innerHeight = height;
    instance.setState = setState;
    instance.mounted = true;
    instance.updateDimentions();

    expect(setState).toHaveBeenCalledWith({ width, height });
  });

  it('should not call setState when updateDimentions is called and component is not mounted', () => {
    const setState = jest.fn();
    const width = 800;
    const height = 600;
    const instance = mount(mockComponent()).instance();

    window.innerWidth = width;
    window.innerHeight = height;
    instance.setState = setState;
    instance.mounted = false;
    instance.updateDimentions();

    expect(setState).not.toHaveBeenCalledWith({ width, height });
  });
});
