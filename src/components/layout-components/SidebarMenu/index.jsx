import React from 'react';

import routes from "app/app.routes";
import { connect } from 'react-redux';

import { NavLink } from 'react-router-dom';
import { setSidebarToggleMobile } from 'state/modules/themeOptions/ThemeOptions';
import PerfectScrollbar from 'react-perfect-scrollbar';

import ChevronRightTwoToneIcon from '@material-ui/icons/ChevronRightTwoTone';

import BusinessCenterTwoToneIcon from '@material-ui/icons/BusinessCenterTwoTone';

import FilterListTwoToneIcon from '@material-ui/icons/FilterListTwoTone';

import { SidebarWidget } from '..';

const SidebarMenu = (props) => {
  const { setSidebarToggleMobile } = props;

  const toggleSidebarMobile = () => setSidebarToggleMobile(false);

  return (
    <>
      <PerfectScrollbar>
        <div className="sidebar-navigation">
          <SidebarWidget />
          <div className="sidebar-header">
            <span>Newspage</span>
          </div>
          <ul>
            <li>
              <NavLink
                onClick={toggleSidebarMobile}
                activeClassName="active"
                className="nav-link-simple"
                to="/"
              >
                <span className="sidebar-icon">
                  <BusinessCenterTwoToneIcon />
                </span>
                Trang chủ
                <span className="sidebar-icon-indicator sidebar-icon-indicator-right">
                  <ChevronRightTwoToneIcon />
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={toggleSidebarMobile}
                activeClassName="active"
                className="nav-link-simple"
                to={routes["search"].path}
              >
                <span className="sidebar-icon">
                  <FilterListTwoToneIcon />
                </span>
                  Tìm kiếm
                <span className="sidebar-icon-indicator sidebar-icon-indicator-right">
                  <ChevronRightTwoToneIcon />
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={toggleSidebarMobile}
                activeClassName="active"
                className="nav-link-simple"
                to={routes["topics"].path}
              >
                <span className="sidebar-icon">
                  <FilterListTwoToneIcon />
                </span>
                  Chủ đề
                <span className="sidebar-icon-indicator sidebar-icon-indicator-right">
                  <ChevronRightTwoToneIcon />
                </span>
              </NavLink>
            </li>
          </ul>
        </div>
      </PerfectScrollbar>
    </>
  );
};

const mapStateToProps = (state) => ({
  sidebarToggleMobile: state.themeOptions.sidebarToggleMobile
});

const mapDispatchToProps = (dispatch) => ({
  setSidebarToggleMobile: (enable) => dispatch(setSidebarToggleMobile(enable))
});

export default connect(mapStateToProps, mapDispatchToProps)(SidebarMenu);
