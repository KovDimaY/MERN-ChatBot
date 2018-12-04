import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import axios from 'axios';
import uuid from 'uuid/v4';

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

  getMessage = (msg) => {
    switch (msg.message) {
      case 'text':
        return {
          type: 'text',
          author: 'bot',
          id: uuid(),
          msg: msg.text.text[0],
        };
      case 'payload':
        return {
          type: 'payload',
          author: 'bot',
          id: uuid(),
          msg: msg.payload.fields.data,
        };
      default:
        return 'Something went wrong...';
    }
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
        <form className="chatbot" onSubmit={this.handleSubmit}>
          <h2>Chat</h2>

          { this.renderMessages() }

          <div ref={(element) => { this.messagesEnd = element; }} />

          <input type="text" value={this.state.currentQuery} onChange={this.handleInput} />
        </form>
      </div>
    );
  }
}

export default Chatbot;
