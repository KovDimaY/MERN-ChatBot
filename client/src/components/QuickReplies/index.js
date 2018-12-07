import React, { Component } from 'react';
import PropTypes from 'prop-types';

import QuickRely from './item';

import './styles.css';

class QuickReplies extends Component {
  state = {
    answered: false,
  };

  handleReply = (type, value) => {
    this.props.onReply(type, value);
    this.setState({ answered: true });
  }

  render() {
    const { data } = this.props;
    const { answered } = this.state;

    if (data && data.values && data.values.length) {
      return (
        <div className="quick-replies-container">
          <p>{data.message}</p>
          {data.values.map(item => (
            <QuickRely data={item} key={item.id} onClick={this.handleReply} disabled={answered} />
          ))}
        </div>
      );
    }

    return <span className="red-text">Oops, something went wrong... :(</span>;
  }
}

QuickReplies.propTypes = {
  data: PropTypes.object.isRequired,
  onReply: PropTypes.func.isRequired,
};

export default QuickReplies;
