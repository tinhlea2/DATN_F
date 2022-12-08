import React from 'react';

import clsx from 'clsx';
import { Link } from 'react-router-dom';

import { List, ListItem } from '@material-ui/core';

import { connect } from 'react-redux';

const Footer = (props) => {
  const { footerShadow, footerBgTransparent } = props;

  return (
    <>
      <div
        className={clsx('app-footer text-black-50', {
          'app-footer--shadow': footerShadow,
          'app-footer--opacity-bg': footerBgTransparent
        })}>
        <div className="app-footer--first">
          <List component="div" className="d-flex align-items-center">
            <ListItem
              button
              component={Link}
              to="/"
              className="rounded-sm">
              Trang chủ
            </ListItem>
            <ListItem
              button
              component={Link}
              to="/topics"
              className="rounded-sm">
              Chủ đề 
            </ListItem>
            <ListItem
              button
              component={Link}
              to="/weather"
              className="rounded-sm">
              Weather Today
            </ListItem>
          </List>
        </div>
        <div className="app-footer--second">
          <span>EVNCRAWL </span> ©
          EVNCRAWL 2020
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  footerFixed: state.themeOptions.footerFixed,
  footerShadow: state.themeOptions.footerShadow,
  footerBgTransparent: state.themeOptions.footerBgTransparent
});

export default connect(mapStateToProps)(Footer);
