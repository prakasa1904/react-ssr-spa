import React from 'react';
import { Link } from 'react-router-dom';

const Profile = () => (
  <ul className="pull-right h-menu">
    <li className="dropdown hm-profile">
      <Link data-toggle="dropdown" to="/">
        <img src="https://image.flaticon.com/icons/svg/147/147144.svg" alt="" />
      </Link>

      <ul className="dropdown-menu pull-right dm-icon">
        <li>
          <a href="profile-about.html">
            <i className="zmdi zmdi-account" /> View Profile
          </a>
        </li>
        <li>
          <a href="">
            <i className="zmdi zmdi-input-antenna" /> Privacy Settings
          </a>
        </li>
        <li>
          <a href="">
            <i className="zmdi zmdi-settings" /> Settings
          </a>
        </li>
        <li>
          <a href="">
            <i className="zmdi zmdi-time-restore" /> Logout
          </a>
        </li>
      </ul>
    </li>
  </ul>
);

export default Profile;
