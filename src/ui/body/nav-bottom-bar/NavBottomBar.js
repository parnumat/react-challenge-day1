import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import BrokenImage from "@material-ui/icons/BrokenImage";
import Brightness from "@material-ui/icons/Brightness1";
import BlurCircular from "@material-ui/icons/BlurCircular";

const useStyles = makeStyles({
  root: {
    position: "fixed",
    color: "primary",
    width: "100%",
  },
});

export default function NavBottomBar() {
  const classes = useStyles;
  const [value, setValue] = React.useState(0);
  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Brightness" icon={<Brightness />} />
      <BottomNavigationAction label="BrokenImage" icon={<BrokenImage />} />
      <BottomNavigationAction label="BlurCircular" icon={<BlurCircular />} />
    </BottomNavigation>
  );
}
