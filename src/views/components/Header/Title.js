import React from 'react';
import { string } from 'prop-types';
import { Link } from 'react-router-dom';

const Title = ({ title, description }) => (
  <div className="pull-left h-logo">
    <Link to="/" className="hidden-xs">
      {title}
      <small>{description}</small>
    </Link>

    <div className="menu-collapse" data-ma-action="sidebar-open" data-ma-target="main-menu">
      <div className="mc-wrap">
        <div className="mcw-line top palette-White bg" />
        <div className="mcw-line center palette-White bg" />
        <div className="mcw-line bottom palette-White bg" />
      </div>
    </div>
  </div>
  );

Title.propTypes = {
  title: string,
  description: string
};

Title.defaultProps = {
  title: 'TERPUSAT',
  description: 'Untuk Indonesia'
};

export default Title;
