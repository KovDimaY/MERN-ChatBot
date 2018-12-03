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

  dfTextQuery = async (query) => {
    const userMessage = {
      author: 'user',
      id: uuid(),
      msg: query,
    };

    this.setState({ messages: [...this.state.messages, userMessage] });

    const res = await axios.post('/api/df/textQuery', { query, userID: this.userID });

    res.data.fulfillmentMessages.forEach((msg) => {
      const botMessage = {
        author: 'bot',
        id: uuid(),
        msg: msg.text.text[0],
      };

      this.setState({ messages: [...this.state.messages, botMessage] });
    });
  }

  dfEventQuery = async (query) => {
    const res = await axios.post('/api/df/eventQuery', { query, userID: this.userID });

    res.data.fulfillmentMessages.forEach((msg) => {
      const botMessage = {
        author: 'bot',
        id: uuid(),
        msg: msg.text.text[0],
      };

      this.setState({ messages: [...this.state.messages, botMessage] });
    });
  }

  renderMessages() {
    const { messages } = this.state;

    if (messages && messages.length) {
      return messages.map(({ msg, author, id }) => (
        <Message msg={msg} author={author} key={id} />),
      );
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
