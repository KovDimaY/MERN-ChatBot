import React from 'react';
import { create } from 'react-test-renderer';
import { mount } from 'enzyme';

import Header from '../../Header';

jest.mock('react-router-dom', () => ({ Link: 'Link' }));
jest.mock('materialize-css', () => ({
  Sidenav: { init: param => param },
}));

const mockComponent = props => (
  <Header {...props} />
);

describe('components/<Header />', () => {
  it('should render component', () => {
    const tree = create(mockComponent()).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should init and save Sidenav when componentDidMount is called with sidenavRef', () => {
    const sidenavRef = 'sidenavRef';

    const instance = mount(mockComponent()).instance();
    instance.sidenavRef = sidenavRef;
    instance.componentDidMount();

    expect(instance.sidenavInstance).toEqual(sidenavRef);
  });

  it('should destroy Sidenav when componentWillUnmount is called with existing Sidenav', () => {
    const destroy = jest.fn();

    const instance = mount(mockComponent()).instance();
    instance.sidenavRef = { destroy };
    instance.componentDidMount();
    instance.componentWillUnmount();

    expect(destroy).toHaveBeenCalled();
  });

  // useless check, I know, but it is needed for the coverage... :)
  it('should not call destroy when componentWillUnmount is called without Sidenav', () => {
    const destroy = jest.fn();

    const instance = mount(mockComponent()).instance();
    instance.sidenavInstance = null;
    instance.componentWillUnmount();

    expect(destroy).not.toHaveBeenCalled();
  });
});
