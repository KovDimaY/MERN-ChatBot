import React from 'react';
import PropTypes from 'prop-types';

import Header from '../components/Header';
import Chatbot from '../components/Chatbot';

const Layout = props => (
  <div className="container">
    <Header />
    <div>
      {props.children}
    </div>
    <Chatbot />
  </div>
);

Layout.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Layout;
