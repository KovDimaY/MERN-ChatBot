import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Cookies from 'universal-cookie';
import axios from 'axios';
import uuid from 'uuid/v4';
import structjson from 'utils/structjson';

import ChatBot from 'components/Chatbot';
import { VALID_ROUTES } from 'constants/routes';

const cookies = new Cookies();

export class ChatbotContainer extends Component {
  constructor(props) {
    super(props);

    const currentLocation = this.props.location.pathname;

    this.state = {
      messages: [],
      show: true,
      visitedRoutes: [currentLocation],
    };
  }

  componentDidMount() {
    this.userID = cookies.get('userID');

    if (!this.userID) {
      this.userID = uuid();
      cookies.set('userID', this.userID, { path: '/' });
    }

    this.dfEventQuery('Welcome');
  }

  async componentWillReceiveProps(nextProps) {
    const { visitedRoutes } = this.state;
    const { pathname } = nextProps.location;

    if (VALID_ROUTES.includes(pathname) && !visitedRoutes.includes(pathname)) {
      await this.delayExecution(500);
      const event = `${pathname.substring(1, pathname.length)}-visited`;

      this.dfEventQuery(event);
      this.setState({ visitedRoutes: [...visitedRoutes, pathname], show: true });
    }
  }

  getBotMessage = (msg) => {
    switch (msg.message) {
      case 'text':
        return {
          type: 'text',
          author: 'bot',
          id: uuid(),
          msg: msg.text.text[0],
        };
      case 'payload': {
        const payload = structjson.structProtoToJson(msg.payload.fields.data.structValue);

        return {
          type: 'payload',
          author: 'bot',
          id: uuid(),
          msg: payload,
        };
      }
      default:
        return 'Something went wrong...';
    }
  }

  saveBotAnswers(messages) {
    const newMessages = messages.map(this.getBotMessage);

    this.setState({ messages: [...this.state.messages, ...newMessages] });
  }

  delayExecution = milliseconds => (
    new Promise((resolve) => {
      setTimeout(resolve, milliseconds);
    })
  );

  changeShowMessages = () => {
    this.setState({ show: !this.state.show });
  }

  handleSubmit = (query) => {
    if (query) this.dfTextQuery(query);
  }

  async handleRequestError() {
    const botMessage = {
      type: 'text',
      author: 'bot',
      id: uuid(),
      msg: 'I am having troubles, I need to terminate. I\'ll be back.',
    };

    this.setState({ messages: [...this.state.messages, botMessage] });
    await this.delayExecution(2000);
    this.setState({ show: false });
  }

  dfTextQuery = async (query) => {
    const userMessage = {
      type: 'text',
      author: 'user',
      id: uuid(),
      msg: query,
    };

    this.setState({ messages: [...this.state.messages, userMessage] });

    try {
      const res = await axios.post('/api/df/textQuery', { query, userID: this.userID });

      this.saveBotAnswers(res.data.fulfillmentMessages);
    } catch (error) {
      this.handleRequestError();
    }
  }

  dfEventQuery = async (query) => {
    try {
      const res = await axios.post('/api/df/eventQuery', { query, userID: this.userID });

      this.saveBotAnswers(res.data.fulfillmentMessages);
    } catch (error) {
      this.handleRequestError();
    }
  }

  handleReply = (type, value) => {
    if (value) {
      switch (type) {
        case 'trigger':
          this.dfEventQuery(value);
          break;
        default:
          this.dfTextQuery(value);
      }
    }
  }

  render() {
    const { messages, show } = this.state;

    return (
      <ChatBot
        messages={messages}
        show={show}
        onToggleShow={this.changeShowMessages}
        onSubmitMessage={this.handleSubmit}
        onReply={this.handleReply}
      />
    );
  }
}

ChatbotContainer.propTypes = {
  location: PropTypes.object.isRequired,
};

export default withRouter(ChatbotContainer);
