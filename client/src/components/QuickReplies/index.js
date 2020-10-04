import React, { Component } from 'react';
import PropTypes from 'prop-types';

import QuickReplyItem from '../Common/QuickReplyItem';

/**
 * This component is used as one of the types of messages of the Bot.
 * It is a set of multiple QuickReplyItems joined together in one component.
 * The main goal of the component is to combine multiple quick replies into one
 * portion and handle the reply of the user.
 */
class QuickReplies extends Component {
  state = {
    answered: false,
  };

  handleReply = (type, value) => {
    this.props.onReply(type, value);
    this.setState({ answered: true });
  };

  render() {
    const { data } = this.props;
    const { answered } = this.state;

    if (data && data.values && data.values.length) {
      return (
        <div className="quick-replies-container">
          <p>{data.message}</p>
          {data.values.map(item => (
            <QuickReplyItem
              type={item.type}
              text={item.text}
              value={item.value}
              key={item.id}
              onClick={this.handleReply}
              disabled={answered}
            />
          ))}
        </div>
      );
    }

    return <span className="red-text">Oops, something went wrong... :(</span>;
  }
}

QuickReplies.propTypes = {
  /** All the information about quick replies for the user.
   * It contains an array of all the options for the user to chose.
   */
  data: PropTypes.object.isRequired,
  /** The function to be called when the user clicks on one of the replies. */
  onReply: PropTypes.func.isRequired,
};

export default QuickReplies;
