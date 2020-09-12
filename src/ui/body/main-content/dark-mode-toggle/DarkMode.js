import React from "react";
import { makeStyles, Button } from "@material-ui/core";

const useStyles = makeStyles({
  darkGround: {
    width:"100%",
    backgroundColor: "#1f1f1f",
    color: "#FFFFFF",
  },
  brightGround: {
  
    width:"100%",
    backgroundColor: "#FFFFFF",
    color: "#1f1f1f",
  },
  DarkButton: {
    backgroundColor: "#1f1f1f",
    color: "#FFFFFF",
  },
  brightButton: {
    backgroundColor: "#FFFFFF",
    color: "#1f1f1f",
  },
});

export default function DarkMode() {
  const [changeMode, setChangeMode] = React.useState(false);
  const classes = useStyles();
  return (
    <div
      className={
        changeMode === true ? classes.darkGround : classes.brightGround
      }
    >
      <Button
        className={
          changeMode === true ? classes.DarkButton : classes.brightButton
        }
        variant="outlined"
        onClick={() => setChangeMode(!changeMode)}
      >
        change mode
      </Button>
      <h1>The darkness</h1>
      <p>Lorem not found the ... snipped</p>
    </div>
  );
}
