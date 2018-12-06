import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import axios from 'axios';
import uuid from 'uuid/v4';
import stuctjson from '../../utils/stuctjson';

import Message from '../Message';

import './styles.css';

const cookies = new Cookies();

class Chatbot extends Component {
  state = {
    messages: [],
    currentQuery: '',
  };

  componentDidMount() {
    this.userID = cookies.get('userID');

    if (!this.userID) {
      this.userID = uuid();
      cookies.set('userID', this.userID, { path: '/' });
    }

    this.dfEventQuery('Welcome');
  }

  componentDidUpdate() {
    if (this.messagesEnd) {
      this.messagesEnd.scrollIntoView({ behavior: 'smooth' });
    }
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
        const payload = stuctjson.structProtoToJson(msg.payload.fields.data.structValue);

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

  handleInput = (event) => {
    const query = event.target.value;

    this.setState({ currentQuery: query });
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

  dfTextQuery = async (query) => {
    const userMessage = {
      type: 'text',
      author: 'user',
      id: uuid(),
      msg: query,
    };

    this.setState({ messages: [...this.state.messages, userMessage] });

    const res = await axios.post('/api/df/textQuery', { query, userID: this.userID });

    this.saveBotAnswers(res.data.fulfillmentMessages);
  }

  dfEventQuery = async (query) => {
    const res = await axios.post('/api/df/eventQuery', { query, userID: this.userID });

    this.saveBotAnswers(res.data.fulfillmentMessages);
  }

  renderMessages() {
    const { messages } = this.state;

    if (messages && messages.length) {
      return messages.map(({
        type, msg, author, id,
      }) => <Message type={type} msg={msg} author={author} key={id} />);
    }

    return null;
  }

  render() {
    return (
      <div className="chatbot-container">
        <nav>
          <div className="nav-wrapper">
            <div className="brand-logo">Messages</div>
          </div>
        </nav>
        <form className="chatbot" onSubmit={this.handleSubmit}>
          <div className="messages">
            { this.renderMessages() }

            <div ref={(element) => { this.messagesEnd = element; }} />
          </div>
          <div className="chatbot-input-wrapper">
            <input
              className="chatbot-input"
              type="text"
              placeholder="Enter your message..."
              value={this.state.currentQuery}
              onChange={this.handleInput}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Chatbot;
