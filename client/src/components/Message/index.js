import React from 'react';
import PropTypes from 'prop-types';

import Cards from '../Cards';
import QuickReplies from '../QuickReplies';

import { botAvatar, userAvatar } from '../../images';

import './styles.css';

const Message = (props) => {
  const {
    author, msg, type, onReply,
  } = props;

  const renderAvatar = src => (
    <div className="col s2">
      <img src={src} alt="avatar" className="circle responsive-img" />
    </div>
  );

  const renderError = () => <span className="red-text">{msg}</span>;

  const renderTextMessage = () => <span className="black-text">{msg}</span>;

  const renderPayloadMessage = () => {
    switch (msg.type) {
      case 'cards':
        return <Cards data={msg} />;
      case 'quick-replies':
        return <QuickReplies data={msg} onReply={onReply} />;
      default:
        return renderError();
    }
  };

  const renderMessage = () => {
    switch (type) {
      case 'text':
        return renderTextMessage();
      case 'payload':
        return renderPayloadMessage();
      default:
        return renderError();
    }
  };

  return (
    <div className="message-container">
      <div className="col s12 m8 offset-m2 offset-l3">
        <div className="card-panel grey lighten-5 z-depth-1 small-padding">
          <div className="row valign-wrapper no-margin">
            { author === 'bot' && renderAvatar(botAvatar) }

            <div className={`col s10 ${author}-message`}>
              {renderMessage()}
            </div>

            { author === 'user' && renderAvatar(userAvatar) }
          </div>
        </div>
      </div>
    </div>
  );
};

Message.propTypes = {
  author: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onReply: PropTypes.func.isRequired,
  msg: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
};

export default Message;
