import React from "react";
import { makeStyles } from "@material-ui/core";

const useStytles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    padding: "0px 5px 20px 5px",
  },
  elementControl: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0FF",
    height: 50,
    width: 50,
    margin: "5px",
    borderRadius: "5px 20px 5px 7px/20px 20px 5px 7px",
    "&:hover": {
      boxShadow: "none",
      backgroundColor: "#b0c7",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#0fd7",
    },
    "&:focus": {
      backgroundColor: "#00f",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
    },
  },
});

export default function ShapeHover() {
  const classes = useStytles();
  return (
    <div className={classes.root}>
      <div className={classes.elementControl}>s</div>
      <div className={classes.elementControl}>s</div>
      <div className={classes.elementControl}>s</div>
      <div className={classes.elementControl}>s</div>
    </div>
  );
}
