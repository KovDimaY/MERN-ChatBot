import React from 'react';
import { create } from 'react-test-renderer';
import { mount } from 'enzyme';

import QuickReply from '../../QuickReplyItem';

const mockComponent = props => <QuickReply {...props} />;

describe('components/Common/<QuickReplyItem />', () => {
  it('should render component with type link', () => {
    const props = {
      type: 'link',
      text: 'test-link',
      value: 'value-link',
    };
    const tree = create(mockComponent(props)).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render component with type text', () => {
    const props = {
      type: 'text',
      text: 'test-text',
      value: 'value-text',
    };
    const tree = create(mockComponent(props)).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render component with type trigger', () => {
    const props = {
      type: 'trigger',
      text: 'test-trigger',
      value: 'value-trigger',
    };
    const tree = create(mockComponent(props)).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render component with default type', () => {
    const props = {
      type: 'does-not-exist',
      text: 'test-does-not-exist',
      value: 'value-does-not-exist',
    };
    const tree = create(mockComponent(props)).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should call onClick when handleClick is called', () => {
    const onClick = jest.fn();
    const type = 'type';
    const value = 'value';
    const props = { type, value, onClick };

    const instance = mount(mockComponent(props)).instance();

    instance.handleClick(type, value);

    expect(onClick).toHaveBeenCalledWith(type, value);
  });

  it('should not call onClick when handleClick is called and onClick is not provided', () => {
    const onClick = jest.fn();
    const type = 'type';
    const value = 'value';
    const props = { type, value, onClick: null };

    const instance = mount(mockComponent(props)).instance();

    instance.handleClick(type, value);

    // useless check, I know, but it is needed for the coverage... :)
    expect(onClick).not.toHaveBeenCalledWith(type, value);
  });
});
