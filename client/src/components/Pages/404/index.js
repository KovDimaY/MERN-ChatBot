import React from 'react';
import { Link } from 'react-router-dom';

import Tilt from 'react-tilt';

import { HOME } from 'constants/routes';

import './styles.css';

const NotFound = () => (
  <div className="not-found-container">
    <Tilt className="tilt" options={{ max: 10, scale: 1.05 }}>
      <div className="image computer">
        <div className="image robot" />
        <div className="image text" />
      </div>
    </Tilt>
    <h3 className="title">{"It looks like you're lost..."}</h3>
    <Link
      className="link waves-effect waves-light btn-large red accent-2"
      to={HOME}
    >
      Go Home
    </Link>
  </div>
);

export default NotFound;
