import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Sidenav } from 'materialize-css';

import './styles.css';
import { background, userAvatar } from '../../images';
import { HOME } from '../../constants/routes';

import NavElements from './nav-elements';

class Header extends Component {
  componentDidMount() {
    if (this.sidenavRef) {
      this.sidenavInstance = Sidenav.init(this.sidenavRef);
    }
  }

  componentWillUnmount() {
    if (this.sidenavInstance) {
      this.sidenavInstance.destroy();
    }
  }

  renderNavigation = withIcon => (
    <React.Fragment>
      {
        NavElements.map(({ label, url, icon }) => (
          <li>
            <Link to={url}>{withIcon && <i className="material-icons">{icon}</i>} {label}</Link>
          </li>
        ))
      }
    </React.Fragment>
  )

  renderMobileMenu = () => (
    <React.Fragment>
      <ul id="nav-mobile" className="sidenav" ref={(element) => { this.sidenavRef = element; }}>
        <li>
          <div className="user-view">
            <div className="background">
              <img src={background} alt="backround" />
            </div>
            <img className="circle" src={userAvatar} alt="user-avatar" />
            <span className="white-text name">Guest User</span>
            <span className="white-text email">example@domain.com</span>
          </div>
        </li>
        {this.renderNavigation(true)}
      </ul>
      <div data-target="nav-mobile" className="sidenav-trigger hide-on-large-only">
        <i className="large material-icons">menu</i>
      </div>
    </React.Fragment>
  )

  render() {
    return (
      <nav className="header-container">
        <div className="nav-wrapper">
          <Link to={HOME} className="brand-logo">CV-Bot</Link>

          <ul className="right hide-on-med-and-down">
            {this.renderNavigation(false)}
          </ul>

          {this.renderMobileMenu()}
        </div>
      </nav>
    );
  }
}

export default Header;
