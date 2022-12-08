import React from 'react';

import clsx from 'clsx';

import { connect } from 'react-redux';

import { setSidebarToggleMobile } from 'state/modules/themeOptions/ThemeOptions';
import { makeStyles } from '@material-ui/core';

const headerStyle = makeStyles({
  line: {
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: "200",
    display: "grid",
    gridTemplateColumns: "1fr auto 1fr",
    gridTemplateRows: "20px 0",
    "&:after": {
      content: " ",
      display: "block",
      borderBottom: "3px solid #4eb982"
    },
    "&:before": {
      content: " ",
      display: "block",
      borderBottom: "3px solid #4eb982"
    }
  },
  welcome: {
    marginBottom: "0px",
    marginLeft: "20px",
    fontWeight: "bold",
    color: "blue",
    textTransform: "uppercase"
  }
});

const Header = (props) => {
  const {
    headerShadow,
    headerBgTransparent,
    sidebarToggleMobile,
    setSidebarToggleMobile
  } = props;

  const classes = headerStyle();

  const toggleSidebarMobile = () => {
    setSidebarToggleMobile(!sidebarToggleMobile);
  };

  return (
    <>
      <div
        className={clsx('app-header', {
          'app-header--shadow': headerShadow,
          'app-header--opacity-bg': headerBgTransparent
        })}>
        <div className="app-header--pane">
          <button
            className={clsx(
              'navbar-toggler hamburger hamburger--elastic toggle-mobile-sidebar-btn',
              { 'is-active': sidebarToggleMobile }
            )}
            onClick={toggleSidebarMobile}>
            <span className="hamburger-box">
              <span className="hamburger-inner" />
            </span>
          </button>
          <h5 className={classes.welcome}>Chào mừng bạn đến với trang web tổng hợp tin tức điện lực</h5>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  headerShadow: state.themeOptions.headerShadow,
  headerBgTransparent: state.themeOptions.headerBgTransparent,
  sidebarToggleMobile: state.themeOptions.sidebarToggleMobile
});

const mapDispatchToProps = (dispatch) => ({
  setSidebarToggleMobile: (enable) => dispatch(setSidebarToggleMobile(enable))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
