import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Message from '../Message';

import './styles.css';


export class Chatbot extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentQuery: '',
    };
  }

  componentDidUpdate() {
    if (this.messagesEnd) {
      this.messagesEnd.scrollIntoView({ behavior: 'smooth' });
    }
  }

  getContainerClass() {
    return this.props.show ? 'chat-opened' : 'chat-closed';
  }

  handleInput = (event) => {
    const query = event.target.value.substring(0, 200);

    this.setState({ currentQuery: query });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { currentQuery } = this.state;

    if (currentQuery) {
      this.setState({ currentQuery: '' });
      this.props.onSubmitMessage(currentQuery);
    }
  }

  renderMessages(messages) {
    if (messages && messages.length) {
      return messages.map(({
        type, msg, author, id,
      }) => (
        <Message type={type} msg={msg} author={author} key={id} onReply={this.props.onReply} />
      ));
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
    const { messages, show, onToggleShow } = this.props;

    return (
      <div className={`container chatbot-container ${this.getContainerClass()}`}>
        <div className="collapse-header blue" onClick={onToggleShow}>
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
  show: PropTypes.bool.isRequired,
  onToggleShow: PropTypes.func.isRequired,
  onSubmitMessage: PropTypes.func.isRequired,
  onReply: PropTypes.func.isRequired,
  messages: PropTypes.array,
};

Chatbot.defaultProps = {
  messages: [],
};

export default Chatbot;
