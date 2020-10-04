import React from 'react';
import PropTypes from 'prop-types';

import { botAvatar, userAvatar } from 'images';

import Cards from '../Cards';
import QuickReplies from '../QuickReplies';

import './styles.css';

/**
 * This component contains all the logic of how messages are rendered and interacted.
 * Depending on the type, it shows the text, cards or quick replies messages.
 * The main task of this component is to figure out what is the type of the message
 * and how to render it, passing all the params to its children.
 */
const Message = props => {
  const { author, msg, type, onReply } = props;

  const renderAvatar = src => (
    <div className="col s2 avatar-wrapper">
      <img src={src} alt="avatar" className="circle responsive-img user-avatar" />
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
            {author === 'bot' && renderAvatar(botAvatar)}

            <div className={`col s10 ${author}-message`}>{renderMessage()}</div>

            {author === 'user' && renderAvatar(userAvatar)}
          </div>
        </div>
      </div>
    </div>
  );
};

Message.propTypes = {
  /** This props indicates who is the author of the message. Can be "user" or "bot". */
  author: PropTypes.string.isRequired,
  /** Indicats a type of the message.
   * At the moment only two types are implemented: "text" and "payload".
   */
  type: PropTypes.string.isRequired,
  /** The function to be called after the reply of the user
   * (only for the "quick-replies" messages).
   */
  onReply: PropTypes.func.isRequired,
  /** The content of the message. Can be just a text or an object with all the info required. */
  msg: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
};

export default Message;
