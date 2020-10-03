import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.css';

/**
 * This component is a dynamic element which appears as a quick reply of the bot.
 * It can be just a text, can be a link or a trigger for another phrase of the bot.
 * The purpose of this component is to simplify interaction with the bot for the user.
 */
class QuickReplyItem extends Component {
  handleClick = () => {
    const { onClick, type, value } = this.props;

    if (onClick) {
      onClick(type, value);
    }
  };

  renderLink() {
    const { text, value } = this.props;

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
        {this.props.text}
      </button>
    );
  }

  renderItem() {
    switch (this.props.type) {
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
    return <div className="quick-reply-containter">{this.renderItem()}</div>;
  }
}

QuickReplyItem.propTypes = {
  /** This prop defines the functionality of the element. Can be "link", "text" or "trigger". */
  type: PropTypes.string.isRequired,
  /** The text which will appear as a quick reply of the bot. */
  text: PropTypes.string.isRequired,
  /** This prop is needed for the element of type "link" (to pass the href)
   * and for the type "trigger" (to send this value by the onClick function)
   */
  value: PropTypes.string.isRequired,
  /** This prop is a function that will be executed if the type of the element is "trigger". */
  onClick: PropTypes.func,
  /** This prop makes the button disabled in case if it is of type "trigger". */
  disabled: PropTypes.bool,
};

QuickReplyItem.defaultProps = {
  onClick: null,
  disabled: false,
};

export default QuickReplyItem;
