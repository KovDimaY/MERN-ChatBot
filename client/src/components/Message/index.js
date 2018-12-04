import React from 'react';
import PropTypes from 'prop-types';

import Card from '../Card';

const Message = ({ author, msg, type }) => {
  const renderAvatar = name => (
    <div className="col s2">
      <div className="btn-floating btn-large waves-effect waves-light red">
        {name}
      </div>
    </div>
  );

  const renderTextMessage = () => (
    <div className="col s10">
      <span className="black-text">{msg}</span>
    </div>
  );

  const renderCardMessage = () => {
    if (msg && msg.listValue && msg.listValue.values && msg.listValue.values.length) {
      return (
        <div className="col s10">
          {msg.listValue.values.map((data, index) => <Card data={data} key={`key_${index}`} />)}
        </div>
      );
    }
    return null;
  };

  const renderError = () => (
    <div className="col s10">
      <span className="red-text">{msg}</span>
    </div>
  );

  const renderMessage = () => {
    switch (type) {
      case 'text':
        return renderTextMessage();
      case 'payload':
        return renderCardMessage();
      default:
        return renderError();
    }
  };

  return (
    <div className="col s12 m8 offset-m2 offset-l3">
      <div className="card-panel grey lighten-5 z-depth-1">
        <div className="row valign-wrapper">
          { author === 'bot' && renderAvatar('Bot') }

          {renderMessage()}

          { author === 'user' && renderAvatar('Me') }
        </div>
      </div>
    </div>
  );
};

Message.propTypes = {
  author: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  msg: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
};

export default Message;
