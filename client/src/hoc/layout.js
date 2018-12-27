import React from 'react';
import PropTypes from 'prop-types';

import Header from '../components/Header';
import ChatbotWithRouter from '../components/Chatbot';

const Layout = props => (
  <div className="container">
    <Header />
    {props.children}
    <ChatbotWithRouter />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
