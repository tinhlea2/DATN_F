import { makeStyles, Switch } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  btnUpload: {
    backgroundColor: "white",
    color: "#35B6B8",
    border: "1px solid #cddbda",
  },
  btnNext: {
    backgroundColor: "#35B6B8",
    color: "white",
    "&:hover": {
      backgroundColor: "#35B6DF",
    },
  },
  btnBack: {
    backgroundColor: "white",
    color: "#35B6B8",
    border: "1px solid #cddbda",
  },
  step: {
    color: "#0297DC!important",
  },
  textWhite: {
    fill: "white",
  },
  linkCheck: {
    cursor: "pointer",
    color: "#0297DC",
    "&:hover": {
      color: "#0297FF",
    },
  },
  stepFlex: {
    display: "flex",
    alignItems: "start",
  },
  textHeader: {
    display: "flex",
    fontSize: "30px",
    justifyContent: "center",
    "@media (max-width: 767px)": {
      fontSize: "25px",
    },
  },
  textCenter: {
    display: "flex",
    justifyContent: "center",
  },
  textBold: {
    fontSize: "16px",
    fontWeight: "bold",
    marginTop: "15px",
  },
  textContent: {
    fontSize: "12px",
    color: "#546e7a",
  },
  textItem: {
    fontSize: "14px",
    color: "#546e7a",
    marginTop: "10px",
    marginBottom: "5px",
  },
  connector: {
    width: "2px",
    height: "40px",
    backgroundColor: "black",
  },
  rootConnector: {
    display: "flex",
    justifyContent: "center",
    paddingTop: "30px",
  },
  rootVer: {
    display: "flex",
    justifyContent: "center",
    "@media (max-width: 767px)": {
      justifyContent: "left",
    },
  },
  topIcon: {
    height: "40px",
    width: "40px",
    borderRadius: "30px",
    backgroundColor: "#E8E8E8",
    marginBottom: "10px",
  },
  dpInline: {
    display: "inline",
  },
  fSelect: {
    display: "flex",
    alignItems: "center",
    paddingTop: "0px!important",
    paddingBottom: "0px!important",
  },
  pb: {
    "@media (max-width: 600px)": {
      paddingBottom: "12px!important",
    },
  },
  dFlex: {
    display: "flex",
    "@media (max-width: 600px)": {
      display: "block",
    },
  },
  rmDirector: {
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    "@media (max-width: 600px)": {
      display: "block",
    },
  },
  btnRemove: {
    marginBottom: "20px",
    "@media (max-width: 600px)": {
      display: "flex",
      flexDirection: "row-reverse",
      marginBottom: "0px",
    },
  },
  dFlexCustom: {
    display: "flex",
    "@media (max-width: 900px)": {
      display: "block",
    },
  },
  txtNotification: {
    fontSize: "16px",
    fontWeight: "bold",
    marginBottom: "-5px",
  },
}));

export const CustomerSwitch = withStyles({
  switchBase: {
    color: "#7FF0C3",
    "&$checked": {
      color: "#7FF0C3",
    },
    "&$checked + $track": {},
  },
  checked: {},
  track: {},
})(Switch);
