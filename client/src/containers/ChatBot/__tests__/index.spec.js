import React from 'react';
import { create } from 'react-test-renderer';
import { mount } from 'enzyme';
import mockAxios from 'axios';

import Config from 'config';

import { ChatbotContainer } from '../../ChatBot';
import { checkDiscovery } from '../check-discovery';

jest.mock('uuid/v4', () => () => 'uuid()');
jest.mock('axios', () => ({ post: jest.fn() }));
jest.mock('components/Chatbot', () => 'ChatBot');
jest.mock('utils/structjson', () => ({
  structProtoToJson: data => data,
}));
jest.mock('../check-discovery', () => ({
  checkDiscovery: jest.fn(),
}));

const mockComponent = props => <ChatbotContainer {...props} />;

const props = {
  location: {},
  dispatch: 'dispatch',
};

describe('containers/<ChatbotContainer />', () => {
  it('should render component', () => {
    const tree = create(mockComponent(props)).toJSON();

    expect(tree).toMatchSnapshot();
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
      const newState = {
        visitedRoutes: [...visitedRoutes, pathname],
        show: true,
      };
      const instance = mount(mockComponent(props)).instance();

      instance.state = { visitedRoutes };
      instance.setState = setState;
      instance.delayExecution = delayExecution;
      instance.dfEventQuery = dfEventQuery;
      instance.componentWillReceiveProps(nextProps);

      await expect(delayExecution).toHaveBeenCalledWith(1000);
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
      const newState = {
        visitedRoutes: [...visitedRoutes, pathname],
        show: true,
      };
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

  it('should set state correctly when changeShowMessages is called', () => {
    const setState = jest.fn();
    const instance = mount(mockComponent(props)).instance();

    instance.setState = setState;
    instance.state.show = false;
    instance.changeShowMessages();

    expect(setState).toHaveBeenCalledWith({ show: true });
  });

  describe('handleSubmit()', () => {
    it('should call dfTextQuery if query is not empty', () => {
      const dfTextQuery = jest.fn();
      const query = 'query';
      const instance = mount(mockComponent(props)).instance();

      instance.dfTextQuery = dfTextQuery;
      instance.handleSubmit(query);

      expect(dfTextQuery).toHaveBeenCalledWith(query);
    });

    it('should not call dfTextQuery if currentQuery is empty', () => {
      const dfTextQuery = jest.fn();
      const query = '';
      const instance = mount(mockComponent(props)).instance();

      instance.dfTextQuery = dfTextQuery;
      instance.handleSubmit(query);

      expect(dfTextQuery).not.toHaveBeenCalledWith(query);
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
      msg: "I am having troubles, I need to terminate. I'll be back.",
    };
    const messages = ['old'];
    const expected = ['old', botMessage];
    const instance = mount(mockComponent(props)).instance();

    instance.state = { messages };
    instance.setState = setState;
    instance.delayExecution = delayExecution;
    instance.getBotRandomDelay = () => 1000;

    instance.handleRequestError();

    await expect(delayExecution).toHaveBeenCalledWith(500);
    expect(setState).toHaveBeenCalledWith({ isTyping: true });

    await expect(delayExecution).toHaveBeenCalledWith(1000);
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
    it('should call makeRequest', () => {
      const makeRequest = jest.fn();
      const query = 'query';

      const instance = mount(mockComponent(props)).instance();

      instance.makeRequest = makeRequest;
      instance.dfEventQuery(query);

      expect(makeRequest).toHaveBeenCalledWith(Config.api.dfEventQuery, query);
    });
  });

  describe('dfTextQuery()', () => {
    it('should call makeRequest', async () => {
      const delayExecution = jest.fn();
      const setState = jest.fn();
      const makeRequest = jest.fn();
      const query = 'query';
      const messages = ['old'];
      const userMessage = {
        type: 'text',
        author: 'user',
        id: 'uuid()',
        msg: query,
      };
      const newMessages = ['old', userMessage];

      const instance = mount(mockComponent(props)).instance();

      instance.state = { messages };
      instance.setState = setState;
      instance.delayExecution = delayExecution;
      instance.makeRequest = makeRequest;
      instance.getBotRandomDelay = () => 1000;

      instance.dfTextQuery(query);

      expect(setState).toHaveBeenCalledWith({ messages: newMessages });

      await expect(delayExecution).toHaveBeenCalledWith(500);
      expect(setState).toHaveBeenCalledWith({ isTyping: true });

      await expect(delayExecution).toHaveBeenCalledWith(1000);
      expect(makeRequest).toHaveBeenCalledWith(Config.api.dfTextQuery, query);
    });
  });

  describe('makeRequest()', () => {
    it('should call saveBotAnswers when everything is ok', async () => {
      const delayExecution = jest.fn();
      const setState = jest.fn();
      const saveBotAnswers = jest.fn();
      const handleRequestError = jest.fn();
      const query = 'query';
      const responceMock = {
        data: {
          fulfillmentMessages: 'fulfillmentMessages',
          intent: { displayName: 'displayName' },
          parameters: 'parameters',
        },
      };
      mockAxios.post.mockImplementation(() => Promise.resolve(responceMock));
      const instance = mount(mockComponent(props)).instance();

      instance.saveBotAnswers = saveBotAnswers;
      instance.handleRequestError = handleRequestError;
      instance.setState = setState;
      instance.delayExecution = delayExecution;
      await instance.makeRequest('url', query);

      expect(setState).toHaveBeenCalledWith({ isTyping: false });
      await expect(delayExecution).toHaveBeenCalledWith(500);
      expect(checkDiscovery).toHaveBeenCalledWith(
        'displayName',
        'parameters',
        'dispatch'
      );
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
      await instance.makeRequest('url', query);

      expect(saveBotAnswers).not.toHaveBeenCalledWith('fulfillmentMessages');
      expect(handleRequestError).toHaveBeenCalled();
    });
  });
});
