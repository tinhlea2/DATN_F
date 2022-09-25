import React from 'react';
import clsx from 'clsx';

import { connect } from 'react-redux';

import { setSidebarToggleMobile } from 'state/modules/themeOptions/ThemeOptions';

import {
  SidebarHeader,
  SidebarMenu,
  SidebarFooter
} from '..';

const Sidebar = (props) => {
  const toggleSidebarMobile = () => {
    setSidebarToggleMobile(!sidebarToggleMobile);
  };

  const {
    sidebarStyle,
    sidebarShadow,
    sidebarFooter,
    sidebarToggleMobile,
    setSidebarToggleMobile
  } = props;
  return (
    <>
      <div
        className={clsx('app-sidebar', sidebarStyle, {
          'app-sidebar--shadow': sidebarShadow
        })}>
        <SidebarHeader />
        <div className="app-sidebar--content">
          <SidebarMenu />
        </div>
        {sidebarFooter && <SidebarFooter />}
      </div>
      <div
        onClick={toggleSidebarMobile}
        className={clsx('app-sidebar-overlay', {
          'is-active': sidebarToggleMobile
        })}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  sidebarShadow: state.themeOptions.sidebarShadow,
  sidebarFooter: state.themeOptions.sidebarFooter,
  sidebarStyle: state.themeOptions.sidebarStyle,
  sidebarToggleMobile: state.themeOptions.sidebarToggleMobile
});

const mapDispatchToProps = (dispatch) => ({
  setSidebarToggleMobile: (enable) => dispatch(setSidebarToggleMobile(enable))
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
