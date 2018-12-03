import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <nav>
    <div className="nav-wrapper">
      <Link to="/" className="brand-logo">Home</Link>

      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><Link to="/experience">Experience</Link></li>
        <li><Link to="/education">Education</Link></li>
      </ul>
    </div>
  </nav>
);

export default Header;
