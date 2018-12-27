import React from 'react';
import { create } from 'react-test-renderer';
import { mount } from 'enzyme';
import mockAxios from 'axios';

import { Chatbot } from '../../Chatbot';

jest.mock('uuid/v4', () => () => 'uuid()');
jest.mock('axios', () => ({ post: jest.fn() }));
jest.mock('../../Message', () => 'Message');
jest.mock('../../../utils/structjson', () => ({
  structProtoToJson: data => data,
}));

const mockComponent = props => (
  <Chatbot {...props} />
);

const props = { location: {} };

describe('components/<Chatbot />', () => {
  it('should render component with show=true', () => {
    const tree = create(mockComponent(props)).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render component with show=false', () => {
    const component = create(mockComponent(props));
    component.getInstance().setState({ show: false });

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render component with messages', () => {
    const messages = [{
      type: 'type',
      msg: 'msg',
      author: 'author',
      id: 'id',
    }];
    const component = create(mockComponent(props));
    component.getInstance().setState({ messages });

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should call scrollIntoView when componentDidUpdate is called and messagesEnd exists', () => {
    const scrollIntoView = jest.fn();
    const instance = mount(mockComponent(props)).instance();

    instance.messagesEnd = { scrollIntoView };
    instance.componentDidUpdate();

    expect(scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });
  });

  describe('componentWillReceiveProps()', () => {
    it('should setState and call dfEventQuery if pathname is new', async () => {
      const delayExecution = jest.fn();
      const setState = jest.fn();
      const dfEventQuery = jest.fn();
      const visitedRoutes = [];
      const pathname = '/experience';
      const nextProps = {
        location: { pathname },
      };
      const newState = { visitedRoutes: [...visitedRoutes, pathname], show: true };
      const instance = mount(mockComponent(props)).instance();

      instance.state = { visitedRoutes };
      instance.setState = setState;
      instance.delayExecution = delayExecution;
      instance.dfEventQuery = dfEventQuery;
      instance.componentWillReceiveProps(nextProps);

      await expect(delayExecution).toHaveBeenCalledWith(500);
      expect(dfEventQuery).toHaveBeenCalledWith('experience-visited');
      expect(setState).toHaveBeenCalledWith(newState);
    });

    it('should not setState and call dfEventQuery if pathname is not new', async () => {
      const delayExecution = jest.fn();
      const setState = jest.fn();
      const dfEventQuery = jest.fn();
      const pathname = '/experience';
      const visitedRoutes = [pathname];
      const nextProps = {
        location: { pathname },
      };
      const newState = { visitedRoutes: [...visitedRoutes, pathname], show: true };
      const instance = mount(mockComponent(props)).instance();

      instance.state = { visitedRoutes };
      instance.setState = setState;
      instance.delayExecution = delayExecution;
      instance.dfEventQuery = dfEventQuery;
      instance.componentWillReceiveProps(nextProps);

      await expect(delayExecution).not.toHaveBeenCalledWith(500);
      expect(dfEventQuery).not.toHaveBeenCalledWith('experience-visited');
      expect(setState).not.toHaveBeenCalledWith(newState);
    });
  });

  describe('getBotMessage()', () => {
    it('should return correct value for the type text', () => {
      const message = {
        message: 'text',
        text: { text: ['test text'] },
      };
      const expected = {
        type: 'text',
        author: 'bot',
        id: 'uuid()',
        msg: 'test text',
      };
      const instance = mount(mockComponent(props)).instance();

      const result = instance.getBotMessage(message);

      expect(result).toEqual(expected);
    });

    it('should return correct value for the type payload', () => {
      const payload = {
        fields: {
          data: { structValue: 'structValue' },
        },
      };
      const message = {
        message: 'payload',
        payload,
      };
      const expected = {
        type: 'payload',
        author: 'bot',
        id: 'uuid()',
        msg: 'structValue',
      };
      const instance = mount(mockComponent(props)).instance();

      const result = instance.getBotMessage(message);

      expect(result).toEqual(expected);
    });

    it('should return correct value for the wrong type', () => {
      const message = {
        message: 'wrong',
      };
      const expected = 'Something went wrong...';
      const instance = mount(mockComponent(props)).instance();

      const result = instance.getBotMessage(message);

      expect(result).toEqual(expected);
    });
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
    const instance = mount(mockComponent(props)).instance();

    instance.setState = setState;
    instance.handleInput(event);

    expect(setState).toHaveBeenCalledWith({ currentQuery: expectedText });
  });

  it('should set state correctly when changeShowMessages is called', () => {
    const setState = jest.fn();
    const instance = mount(mockComponent(props)).instance();

    instance.setState = setState;
    instance.state.show = false;
    instance.changeShowMessages();

    expect(setState).toHaveBeenCalledWith({ show: true });
  });

  describe('handleSubmit()', () => {
    it('should preventDefault and call dfTextQuery if currentQuery is not empty', () => {
      const preventDefault = jest.fn();
      const setState = jest.fn();
      const dfTextQuery = jest.fn();
      const event = { preventDefault };
      const currentQuery = 'currentQuery';
      const instance = mount(mockComponent(props)).instance();

      instance.state = { currentQuery };
      instance.setState = setState;
      instance.dfTextQuery = dfTextQuery;
      instance.handleSubmit(event);

      expect(preventDefault).toHaveBeenCalled();
      expect(setState).toHaveBeenCalledWith({ currentQuery: '' });
      expect(dfTextQuery).toHaveBeenCalledWith(currentQuery);
    });

    it('should preventDefault and not call dfTextQuery if currentQuery is empty', () => {
      const preventDefault = jest.fn();
      const setState = jest.fn();
      const dfTextQuery = jest.fn();
      const event = { preventDefault };
      const currentQuery = '';
      const instance = mount(mockComponent(props)).instance();

      instance.state = { currentQuery };
      instance.setState = setState;
      instance.dfTextQuery = dfTextQuery;
      instance.handleSubmit(event);

      expect(preventDefault).toHaveBeenCalled();
      expect(setState).not.toHaveBeenCalledWith({ currentQuery: '' });
      expect(dfTextQuery).not.toHaveBeenCalledWith(currentQuery);
    });
  });

  it('should set state correctly when saveBotAnswers is called', () => {
    const getBotMessage = jest.fn(msg => `${msg}-adapted`);
    const setState = jest.fn();
    const messages = ['old'];
    const newMessages = ['1', '2', '3'];
    const expected = ['old', '1-adapted', '2-adapted', '3-adapted'];
    const instance = mount(mockComponent(props)).instance();

    instance.state = { messages };
    instance.setState = setState;
    instance.getBotMessage = getBotMessage;
    instance.saveBotAnswers(newMessages);

    expect(setState).toHaveBeenCalledWith({ messages: expected });
  });

  it('should set state correctly when handleRequestError is called', async () => {
    const delayExecution = jest.fn();
    const setState = jest.fn();
    const botMessage = {
      type: 'text',
      author: 'bot',
      id: 'uuid()',
      msg: 'I am having troubles, I need to terminate. I\'ll be back.',
    };
    const messages = ['old'];
    const expected = ['old', botMessage];
    const instance = mount(mockComponent(props)).instance();

    instance.state = { messages };
    instance.setState = setState;
    instance.delayExecution = delayExecution;
    instance.handleRequestError();

    expect(setState).toHaveBeenCalledWith({ messages: expected });
    await expect(delayExecution).toHaveBeenCalledWith(2000);
    expect(setState).toHaveBeenCalledWith({ show: false });
  });

  describe('handleReply()', () => {
    it('should call dfEventQuery for the type trigger', () => {
      const dfEventQuery = jest.fn();
      const dfTextQuery = jest.fn();
      const type = 'trigger';
      const value = 'value';
      const instance = mount(mockComponent(props)).instance();

      instance.dfEventQuery = dfEventQuery;
      instance.dfTextQuery = dfTextQuery;
      instance.handleReply(type, value);

      expect(dfEventQuery).toHaveBeenCalledWith(value);
      expect(dfTextQuery).not.toHaveBeenCalledWith(value);
    });

    it('should call dfTextQuery for the type trigger', () => {
      const dfEventQuery = jest.fn();
      const dfTextQuery = jest.fn();
      const type = 'default';
      const value = 'value';
      const instance = mount(mockComponent(props)).instance();

      instance.dfEventQuery = dfEventQuery;
      instance.dfTextQuery = dfTextQuery;
      instance.handleReply(type, value);

      expect(dfEventQuery).not.toHaveBeenCalledWith(value);
      expect(dfTextQuery).toHaveBeenCalledWith(value);
    });

    it('should not call anything if there is no value', () => {
      const dfEventQuery = jest.fn();
      const dfTextQuery = jest.fn();
      const type = 'default';
      const value = '';
      const instance = mount(mockComponent(props)).instance();

      instance.dfEventQuery = dfEventQuery;
      instance.dfTextQuery = dfTextQuery;
      instance.handleReply(type, value);

      expect(dfEventQuery).not.toHaveBeenCalledWith(value);
      expect(dfTextQuery).not.toHaveBeenCalledWith(value);
    });
  });

  describe('dfEventQuery()', () => {
    it('should call saveBotAnswers when everything is ok', async () => {
      const saveBotAnswers = jest.fn();
      const handleRequestError = jest.fn();
      const query = 'query';
      const responceMock = {
        data: { fulfillmentMessages: 'fulfillmentMessages' },
      };
      mockAxios.post.mockImplementation(() => Promise.resolve(responceMock));
      const instance = mount(mockComponent(props)).instance();

      instance.saveBotAnswers = saveBotAnswers;
      instance.handleRequestError = handleRequestError;
      await instance.dfEventQuery(query);

      expect(saveBotAnswers).toHaveBeenCalledWith('fulfillmentMessages');
      expect(handleRequestError).not.toHaveBeenCalled();
    });

    it('should call handleRequestError when error happens', async () => {
      const saveBotAnswers = jest.fn();
      const handleRequestError = jest.fn();
      const query = 'query';
      const responceMock = {
        data: { fulfillmentMessages: 'fulfillmentMessages' },
      };
      mockAxios.post.mockImplementation(() => Promise.reject(responceMock));
      const instance = mount(mockComponent(props)).instance();

      instance.saveBotAnswers = saveBotAnswers;
      instance.handleRequestError = handleRequestError;
      await instance.dfEventQuery(query);

      expect(saveBotAnswers).not.toHaveBeenCalledWith('fulfillmentMessages');
      expect(handleRequestError).toHaveBeenCalled();
    });
  });

  describe('dfTextQuery()', () => {
    it('should set state and call saveBotAnswers when everything is ok', async () => {
      const setState = jest.fn();
      const saveBotAnswers = jest.fn();
      const handleRequestError = jest.fn();
      const query = 'query';
      const messages = ['old'];
      const userMessage = {
        type: 'text',
        author: 'user',
        id: 'uuid()',
        msg: query,
      };
      const newMessages = ['old', userMessage];
      const responceMock = {
        data: { fulfillmentMessages: 'fulfillmentMessages' },
      };
      mockAxios.post.mockImplementation(() => Promise.resolve(responceMock));
      const instance = mount(mockComponent(props)).instance();

      instance.state = { messages };
      instance.setState = setState;
      instance.saveBotAnswers = saveBotAnswers;
      instance.handleRequestError = handleRequestError;
      instance.messagesEnd.scrollIntoView = jest.fn();
      await instance.dfTextQuery(query);

      expect(setState).toHaveBeenCalledWith({ messages: newMessages });
      expect(saveBotAnswers).toHaveBeenCalledWith('fulfillmentMessages');
      expect(handleRequestError).not.toHaveBeenCalled();
    });

    it('should set state and call handleRequestError when error happens', async () => {
      const setState = jest.fn();
      const saveBotAnswers = jest.fn();
      const handleRequestError = jest.fn();
      const query = 'query';
      const messages = ['old'];
      const userMessage = {
        type: 'text',
        author: 'user',
        id: 'uuid()',
        msg: query,
      };
      const newMessages = ['old', userMessage];
      const responceMock = {
        data: { fulfillmentMessages: 'fulfillmentMessages' },
      };
      mockAxios.post.mockImplementation(() => Promise.reject(responceMock));
      const instance = mount(mockComponent(props)).instance();

      instance.state = { messages };
      instance.setState = setState;
      instance.saveBotAnswers = saveBotAnswers;
      instance.handleRequestError = handleRequestError;
      instance.messagesEnd.scrollIntoView = jest.fn();
      await instance.dfTextQuery(query);

      expect(setState).toHaveBeenCalledWith({ messages: newMessages });
      expect(saveBotAnswers).not.toHaveBeenCalledWith('fulfillmentMessages');
      expect(handleRequestError).toHaveBeenCalled();
    });
  });
});
