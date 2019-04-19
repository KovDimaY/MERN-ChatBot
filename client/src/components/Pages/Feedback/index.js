import React, { Component } from 'react';
import moment from 'moment';

import { getRandomInteger } from '../../../utils/common';

import './styles.css';

class Feedback extends Component {
  state = {
    feedbacks: [],
  };

  componentDidMount() {
    fetch('/api/feedbacks')
      .then(response => response.json())
      .then(this.handleResponse);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.feedbacks.length !== this.state.feedbacks.length;
  }

  handleResponse = (result) => {
    this.setState({ feedbacks: result.reverse() });
  }

  renderFeedbackItem = item => (
    <div className={`card blue-grey darken-${getRandomInteger(1, 3)}`} key={item._id}>
      <div className="card-content white-text">
        <div className="card-title-custom">{item.name}</div>
        <p className="card-date">{moment(item.date).format('H:mm - MMMM Do, YYYY')}</p>
        <p className="card-comment">{item.feedback}</p>
      </div>
    </div>
  )

  render() {
    const { feedbacks } = this.state;
    const getEven = (el, idx) => idx % 2 === 0;
    const getOdd = (el, idx) => idx % 2 !== 0;

    return (
      <div className="feedbacks-section-container">
        <h3 className="feedbacks-section-title">Feedback</h3>
        <div className="feedbacks-wrapper">
          <div className="row">
            <div className="col s12 m6">
              {feedbacks.filter(getEven).map(this.renderFeedbackItem)}
            </div>
            <div className="col s12 m6">
              {feedbacks.filter(getOdd).map(this.renderFeedbackItem)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Feedback;
