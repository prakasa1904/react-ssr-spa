import React from 'react';
import { bool } from 'prop-types';

import TabsMenu from './TabsMenu';
import MainMenu from './MainMenu';

const Sidebar = ({ withTab }) => (
  <aside id="s-main-menu" className="sidebar" style={!withTab ? { background: '#edecec' } : null}>
    <div className="smm-header">
      <i className="zmdi zmdi-long-arrow-left" data-ma-action="sidebar-close" />
    </div>
    {withTab && <TabsMenu />}
    <MainMenu />
  </aside>
  );

Sidebar.propTypes = {
  withTab: bool
};

Sidebar.defaultProps = {
  withTab: false
};

export default Sidebar;
