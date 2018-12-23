import React from 'react';
import PropTypes from 'prop-types';

import Header from '../components/Header';
import Chatbot from '../components/Chatbot';

const Layout = props => (
  <div className="container">
    <Header />
    {props.children}
    <Chatbot />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
