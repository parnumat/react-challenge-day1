import React from "react";
import ReduxBox1 from "./components/ReduxBox1";
import { useSelector, useDispatch } from "react-redux";
import { Button, Box, Grid } from "@material-ui/core";
import * as reduxActions from "../../actions/learn-redux/ReduxMainApp.action";

export default function ReduxMainApp() {
  //   const [reduxCount, setReduxCount] = React.useState(0);
  const reduxReducer = useSelector(({ reduxReducer }) => reduxReducer);
  const dispatch = useDispatch();

  return (
    <div>
      <Grid
        container
        spacing={2}
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Grid>
          <Button
            variant="outlined"
            onClick={() => {
              dispatch(reduxActions.add());
            }}
          >
            ADD delay 1s
          </Button>
        </Grid>
        <Grid>
          <Button
            variant="outlined"
            onClick={() => {
              dispatch(reduxActions.remove());
            }}
          >
            REMOVE
          </Button>
        </Grid>
        <Grid>
          {" "}
          <Button
            variant="outlined"
            onClick={() => {
              dispatch(reduxActions.clear(0));
            }}
          >
            CLEAR
          </Button>
        </Grid>
      </Grid>
      <h1>ICE: {reduxReducer.count}</h1>
      <ReduxBox1 />
    </div>
  );
}
