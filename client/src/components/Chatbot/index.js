import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Cookies from 'universal-cookie';
import axios from 'axios';
import uuid from 'uuid/v4';
import structjson from '../../utils/structjson';

import Message from '../Message';
import { VALID_ROUTES } from '../../constants/routes';

import './styles.css';

const cookies = new Cookies();

class Chatbot extends Component {
  constructor(props) {
    super(props);

    const currentLocation = this.props.location.pathname;

    this.state = {
      messages: [],
      currentQuery: '',
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

  componentDidUpdate() {
    if (this.messagesEnd) {
      this.messagesEnd.scrollIntoView({ behavior: 'smooth' });
    }
  }

  getContainerClass() {
    return this.state.show ? 'chat-opened' : 'chat-closed';
  }

  getMessage = (msg) => {
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

  delayExecution = milliseconds => new Promise((resolve) => {
    setTimeout(() => resolve(), milliseconds);
  })

  handleInput = (event) => {
    const query = event.target.value.substring(0, 200);

    this.setState({ currentQuery: query });
  }

  changeShowMessages = () => {
    this.setState({ show: !this.state.show });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { currentQuery } = this.state;

    if (currentQuery) {
      this.setState({ currentQuery: '' });
      this.dfTextQuery(currentQuery);
    }
  }

  saveBotAnswers(messages) {
    messages.forEach((msg) => {
      const botMessage = this.getMessage(msg);

      this.setState({ messages: [...this.state.messages, botMessage] });
    });
  }

  handleRequestError() {
    const botMessage = {
      type: 'text',
      author: 'bot',
      id: uuid(),
      msg: 'I am having troubles, I need to terminate. I\'ll be back.',
    };

    this.setState({ messages: [...this.state.messages, botMessage] });

    setTimeout(() => this.setState({ show: false }), 2000);
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

  renderMessages(messages) {
    if (messages && messages.length) {
      return messages.map(({
        type, msg, author, id,
      }) => <Message type={type} msg={msg} author={author} key={id} onReply={this.handleReply} />);
    }

    return null;
  }

  renderChatbot(show, messages) {
    if (show) {
      return (
        <div className="chatbot" onSubmit={this.handleSubmit}>
          <div className="messages">
            { this.renderMessages(messages) }

            <div ref={(element) => { this.messagesEnd = element; }} />
          </div>
          <form className="chatbot-input-wrapper">
            <input
              className="chatbot-input"
              type="text"
              placeholder="Enter your message..."
              value={this.state.currentQuery}
              onChange={this.handleInput}
            />
            <button className="btn waves-effect waves-light blue" type="submit" name="send-message">
              <i className="material-icons">send</i>
            </button>
          </form>
        </div>
      );
    }
    return null;
  }

  render() {
    const { messages, show } = this.state;

    return (
      <div className={`container chatbot-container ${this.getContainerClass()}`}>
        <div className="collapse-header blue" onClick={this.changeShowMessages}>
          <div className="nav-wrapper">
            <div className="brand-logo">Messages</div>
            <i className="large material-icons toggle-show-icon">{show ? 'arrow_drop_down' : 'arrow_drop_up'}</i>
          </div>
        </div>

        {this.renderChatbot(show, messages)}
      </div>
    );
  }
}

Chatbot.propTypes = {
  location: PropTypes.object.isRequired,
};

export default withRouter(Chatbot);
