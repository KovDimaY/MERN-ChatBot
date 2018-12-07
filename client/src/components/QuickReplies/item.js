import React from 'react';
import PropTypes from 'prop-types';

const QuickReply = ({ data, onClick, disabled }) => {
  const { type, text, value } = data;

  const handleClick = () => {
    onClick(type, value);
  };

  const renderLink = () => (
    <a href={value} rel="noopener noreferrer" target="_blank" className="waves-effect waves-light btn light-blue hoverable">
      {text}
    </a>
  );

  const renderButton = () => (
    <button disabled={disabled} onClick={handleClick} className="waves-effect waves-light btn light-blue hoverable">
      {text}
    </button>
  );

  const renderItem = () => {
    switch (type) {
      case 'link':
        return renderLink();
      case 'text':
      case 'trigger':
        return renderButton();
      default:
        return null;
    }
  };

  return (
    <div className="quick-reply-containter">
      { renderItem() }
    </div>
  );
};

QuickReply.propTypes = {
  data: PropTypes.object.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

QuickReply.defaultProps = {
  onClick: () => {},
  disabled: false,
};

export default QuickReply;
