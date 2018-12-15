import React, { Component } from 'react';

import Animation from '../Common/DotsAnimation';

import './styles.css';

class Disclaimer extends Component {
  render() {
    return (
      <div className="discalimer-container">
        This is DISCLAIMER

        <Animation width={800} height={600} />
      </div>
    );
  }
}

export default Disclaimer;
