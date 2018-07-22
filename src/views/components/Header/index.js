import React from 'react';
import { func } from 'prop-types';

import Title from './Title';
import Profile from './Profile';

const Header = ({ _back }) => (
  <header id="header" className="media">
    <Title />
    <Profile />
  </header>
);

Header.propTypes = {
  _back: func
};

Header.defaultProps = {
  _back: () => {}
};

export default Header;
