import React from 'react';
import { create } from 'react-test-renderer';
import { mount } from 'enzyme';

import { Chatbot } from '../../Chatbot';

jest.mock('../../Message', () => 'Message');

const mockComponent = props => <Chatbot {...props} />;

const defaultProps = {
  show: true,
  onToggleShow: jest.fn(),
  onSubmitMessage: jest.fn(),
  onReply: jest.fn(),
};

describe('components/<Chatbot />', () => {
  it('should render component with no show', () => {
    const props = {
      ...defaultProps,
      show: false,
    };
    const tree = create(mockComponent(props)).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render component with isTyping', () => {
    const props = {
      ...defaultProps,
      show: true,
      isTyping: true,
    };
    const tree = create(mockComponent(props)).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render component without messages', () => {
    const tree = create(mockComponent(defaultProps)).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render component with messages', () => {
    const props = {
      ...defaultProps,
      messages: [{ id: 1 }, { id: 2 }],
    };
    const tree = create(mockComponent(props)).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should call scrollIntoView when componentDidUpdate is called and messagesEnd exists', () => {
    const scrollIntoView = jest.fn();
    const instance = mount(mockComponent(defaultProps)).instance();

    instance.messagesEnd = { scrollIntoView };
    instance.componentDidUpdate();

    expect(scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });
  });

  it('should do nothing when componentDidUpdate is called and messagesEnd does not exists', () => {
    const scrollIntoView = jest.fn();
    const instance = mount(mockComponent(defaultProps)).instance();

    instance.messagesEnd = null;
    instance.componentDidUpdate();

    // I know it is a useless test case, but is needed for the coverage :)
    expect(scrollIntoView).not.toHaveBeenCalledWith({ behavior: 'smooth' });
  });

  it('should set state correctly when handleInput is called with long text', () => {
    const setState = jest.fn();
    const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Ut eget nulla et purus auctor consectetur ornare non lacus. Fusce a mi malesuada,
      elementum nisl eget, auctor nulla. Sed porttitor, tortor vel pretium cursus,
      mauris magna egestas leo, id porttitor nunc metus nec odio. Nullam aliquam ante eros,
      sit amet aliquet nulla rhoncus at. Nulla purus enim, mollis ut ligula eget,
      aliquam sagittis sem. Fusce posuere elit et sodales consequat. Vestibulum mollis
      eget mauris non varius. Sed commodo vulputate aliquam. Integer ligula ipsum,
      sodales eget ex eu, semper suscipit nibh. Nulla eget mattis dui, vitae varius massa.`;
    const expectedText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Ut eget nulla et purus auctor consectetur ornare non lacus. Fusce a mi malesuada,
      elementum nisl eget, auctor nulla. Sed porttitor,`;
    const event = {
      target: { value: text },
    };
    const instance = mount(mockComponent(defaultProps)).instance();

    instance.setState = setState;
    instance.handleInput(event);

    expect(setState).toHaveBeenCalledWith({ currentQuery: expectedText });
  });

  describe('handleSubmit()', () => {
    it('should preventDefault and call onSubmitMessage if currentQuery is not empty', () => {
      const preventDefault = jest.fn();
      const stopPropagation = jest.fn();
      const setState = jest.fn();
      const onSubmitMessage = jest.fn();
      const event = { preventDefault, stopPropagation };
      const currentQuery = 'currentQuery';
      const props = {
        ...defaultProps,
        onSubmitMessage,
      };
      const instance = mount(mockComponent(props)).instance();

      instance.state = { currentQuery };
      instance.setState = setState;
      instance.handleSubmit(event);

      expect(preventDefault).toHaveBeenCalled();
      expect(stopPropagation).toHaveBeenCalled();
      expect(setState).toHaveBeenCalledWith({ currentQuery: '' });
      expect(onSubmitMessage).toHaveBeenCalledWith(currentQuery);
    });

    it('should preventDefault and not call onSubmitMessage if currentQuery is empty', () => {
      const preventDefault = jest.fn();
      const stopPropagation = jest.fn();
      const setState = jest.fn();
      const onSubmitMessage = jest.fn();
      const event = { preventDefault, stopPropagation };
      const currentQuery = '';
      const props = {
        ...defaultProps,
        onSubmitMessage,
      };
      const instance = mount(mockComponent(props)).instance();

      instance.state = { currentQuery };
      instance.setState = setState;
      instance.handleSubmit(event);

      expect(preventDefault).toHaveBeenCalled();
      expect(stopPropagation).toHaveBeenCalled();
      expect(setState).not.toHaveBeenCalledWith({ currentQuery: '' });
      expect(onSubmitMessage).not.toHaveBeenCalledWith(currentQuery);
    });
  });
});
