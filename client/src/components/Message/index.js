import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ author, msg }) => {
  const text = name => (
    <div className="col s2">
      <div className="btn-floating btn-large waves-effect waves-light red">
        {name}
      </div>
    </div>
  );

  return (
    <div className="col s12 m8 offset-m2 offset-l3">
      <div className="card-panel grey lighten-5 z-depth-1">
        <div className="row valign-wrapper">
          { author === 'bot' && text('Bot') }

          <div className="col s10">
            <span className="black-text">{msg}</span>
          </div>

          { author === 'user' && text('Me') }
        </div>
      </div>
    </div>
  );
};

Message.propTypes = {
  author: PropTypes.string.isRequired,
  msg: PropTypes.string.isRequired,
};

export default Message;
