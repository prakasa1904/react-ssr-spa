import React from 'react';
import { Link } from 'react-router-dom';

const MainMenu = () => (
  <ul className="main-menu">
    <li className="active">
      <Link to="/">
        <i className="zmdi zmdi-home" /> Dashboard
      </Link>
    </li>
    <li>
      <Link to="/content">
        <i className="zmdi zmdi-collection-text" /> Content
      </Link>
    </li>
    <li>
      <Link to="/review">
        <i className="zmdi zmdi-comment-alt-text zmdi-hc-fw" /> Review
      </Link>
    </li>
    <li>
      <Link to="/settings">
        <i className="zmdi zmdi-settings zmdi-hc-fw" /> Settings
      </Link>
    </li>
    <li>
      <Link to="/logout">
        <i className="zmdi zmdi-power-setting zmdi-hc-fw" /> Logout
      </Link>
    </li>
  </ul>
  );

export default MainMenu;
