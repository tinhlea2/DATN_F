import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
// import TopBar from "./TopBar";
import PropTypes from "prop-types";
import Header from "../Header";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.light,
    display: "flex",
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  wrapper: {
    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden",
    paddingTop: 70,
    [theme.breakpoints.up("lg")]: {
      paddingLeft: 256,
    },
  },
  contentContainer: {
    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden",
  },
  content: {
    flex: "1 1 auto",
    height: "100%",
    overflow: "auto",
  },
}));

const DashboardLayout = ({ children }) => {
  const classes = useStyles();
  const [setMobileNavOpen] = useState(false);

  return (
    <div className={classes.root}>
      <Header onMobileNavOpen={() => setMobileNavOpen(true)} />
      <div className={classes.wrapper}>
        <div className={classes.contentContainer}>
          <div className={classes.content}>{children}</div>
        </div>
      </div>
    </div>
  );
};

DashboardLayout.propTypes = {
  children: PropTypes.element,
};

export default DashboardLayout;
