import React from 'react';

import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Tooltip } from '@material-ui/core';

import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import {
  setSidebarToggle,
  setSidebarToggleMobile
} from 'state/modules/themeOptions/ThemeOptions';

import projectLogo from 'assets/images/sampra.png';

const SidebarHeader = (props) => {
  const toggleSidebarMobile = () => {
    setSidebarToggleMobile(!sidebarToggleMobile);
  };
  const toggleSidebar = () => {
    setSidebarToggle(!sidebarToggle);
  };
  const {
    sidebarToggleMobile,
    setSidebarToggleMobile,

    sidebarToggle,
    setSidebarToggle
  } = props;

  return (
    <>
      <div className="app-sidebar--header">
        <div className="app-sidebar-logo">
          <NavLink
            to="/"
            title="EVNCRAWL"
            className="app-sidebar-logo">
            <div className="app-sidebar-logo--icon">
              <img
                alt="EVNCRAWL"
                src={projectLogo}
              />
            </div>
            <div className="app-sidebar-logo--text">
              <span>Tin tức điện lực</span>
              <b>tổng hợp</b>
            </div>
          </NavLink>
        </div>
        <Tooltip title="Collapse sidebar" placement="right" arrow>
          <Button
            onClick={toggleSidebar}
            className="btn btn-sm collapse-sidebar-btn">
            <FontAwesomeIcon icon={['far', 'dot-circle']} size="lg" />
          </Button>
        </Tooltip>
        <Button
          className={clsx(
            'navbar-toggler hamburger hamburger--elastic toggle-mobile-sidebar-btn',
            { 'is-active': sidebarToggleMobile }
          )}
          onClick={toggleSidebarMobile}>
          <span className="hamburger-box">
            <span className="hamburger-inner" />
          </span>
        </Button>
        <Tooltip title="Expand sidebar" placement="right" arrow>
          <Button
            onClick={toggleSidebar}
            className="expand-sidebar-btn btn btn-sm">
            <FontAwesomeIcon icon={['fas', 'arrows-alt-h']} />
          </Button>
        </Tooltip>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  sidebarToggle: state.themeOptions.sidebarToggle,
  sidebarToggleMobile: state.themeOptions.sidebarToggleMobile
});

const mapDispatchToProps = (dispatch) => ({
  setSidebarToggle: (enable) => dispatch(setSidebarToggle(enable)),
  setSidebarToggleMobile: (enable) => dispatch(setSidebarToggleMobile(enable))
});

export default connect(mapStateToProps, mapDispatchToProps)(SidebarHeader);
