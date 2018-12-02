import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/experience">Experience</Link></li>
      <li><Link to="/education">Education</Link></li>
    </ul>
  </div>
);

export default Header;
