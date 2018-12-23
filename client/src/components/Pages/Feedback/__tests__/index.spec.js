import React from 'react';
import { create } from 'react-test-renderer';
import { mount } from 'enzyme';

import Feedback from '../../Feedback';

jest.mock('react-router-dom', () => ({ Link: 'Link' }));
jest.mock('../../../../utils/common', () => ({
  getRandomInteger: jest.fn(() => 2),
}));


const mockComponent = props => (
  <Feedback {...props} />
);

describe('components/pages/<Feedback />', () => {
  global.fetch = jest.fn(() => new Promise(resolve => resolve()));

  it('should render component with no feedbacks', () => {
    const tree = create(mockComponent()).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render component with feedbacks', () => {
    const feedbacks = [{
      name: 'name1',
      date: 'date1',
      feedback: 'feedback1',
    },
    {
      name: 'name2',
      date: 'date2',
      feedback: 'feedback2',
    }];
    const component = create(mockComponent());
    component.getInstance().setState({ feedbacks });

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should return true when shouldComponentUpdate is called and the number of feedbacks is different', () => {
    const instance = mount(mockComponent()).instance();
    const nextState = {
      feedbacks: [1, 2, 3],
    };
    instance.state.feedbacks = [1, 2];
    const result = instance.shouldComponentUpdate({}, nextState);

    expect(result).toBe(true);
  });

  it('should return false when shouldComponentUpdate is called and the number of feedbacks is the same', () => {
    const instance = mount(mockComponent()).instance();
    const nextState = {
      feedbacks: [1, 2, 3],
    };
    instance.state.feedbacks = [1, 2, 3];
    const result = instance.shouldComponentUpdate({}, nextState);

    expect(result).toBe(false);
  });

  it('should call setState when handleResponse is called', () => {
    const setState = jest.fn();
    const result = ['1', '2', '3'];

    const instance = mount(mockComponent()).instance();

    instance.setState = setState;
    instance.handleResponse(result);

    expect(setState).toHaveBeenCalledWith({ feedbacks: result.reverse() });
  });
});
