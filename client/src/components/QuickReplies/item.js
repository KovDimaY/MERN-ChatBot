import React, { Component } from 'react';
import PropTypes from 'prop-types';

class QuickReply extends Component {
  handleClick = () => {
    const { onClick, data: { type, value } } = this.props;

    if (onClick) {
      onClick(type, value);
    }
  };

  renderLink() {
    const { text, value } = this.props.data;

    return (
      <a
        href={value}
        rel="noopener noreferrer"
        target="_blank"
        className="waves-effect waves-light btn light-blue hoverable"
      >
        {text}
      </a>
    );
  }

  renderButton() {
    return (
      <button
        disabled={this.props.disabled}
        onClick={this.handleClick}
        className="waves-effect waves-light btn light-blue hoverable"
      >
        {this.props.data.text}
      </button>
    );
  }

  renderItem() {
    switch (this.props.data.type) {
      case 'link':
        return this.renderLink();
      case 'text':
      case 'trigger':
        return this.renderButton();
      default:
        return null;
    }
  }

  render() {
    return (
      <div className="quick-reply-containter">
        { this.renderItem() }
      </div>
    );
  }
}

QuickReply.propTypes = {
  data: PropTypes.object.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

QuickReply.defaultProps = {
  onClick: null,
  disabled: false,
};

export default QuickReply;
