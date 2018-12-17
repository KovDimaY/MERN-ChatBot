import React, { Component } from 'react';

class Feedback extends Component {
  state = {
    feedbacks: [],
  };

  componentDidMount() {
    fetch('/api/feedback')
      .then(response => response.json())
      .then(result => this.setState({ feedbacks: result }));
  }

  renderFeedbackItem = item => (
    <div key={item._id}>
      <span>{item.name}</span>
      <p>{item.feedback}</p>
    </div>
  )

  render() {
    return (
      <div>
        This is FEEDBACK
        {this.state.feedbacks.map(this.renderFeedbackItem)}
      </div>
    );
  }
}

export default Feedback;
