import { Box, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100vw",
    height: "100vh",
    margin: "30px 0px 0px 0px",
    overflow: "hidden",
    "& svg": { display: "block" },
  },
  curved: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    background: "#ff3c00",
    color: "#fff",
    textAlign: "center",
    marginTop: -1,
    paddingBottom: "56px",
    "& h1": {
      fontSize: "3rem",
      marginTop: 10,
      marginBottom: 10,
    },
    "& p": {
      fontSize: "1rem",
      margin: "0px 5px 0px 5px",
    },
  },
  head: {
    position: "fixed",
    zIndex: 99,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    width: "100vw",
    animation: `$wave 5s infinite linear`,
  },
  head1: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    width: "100vw",
    animation: `$wave 10s infinite linear`,
  },
  inHead: {
    display: "flex",
    overflow: "hidden",
    transform: "translateX(-50%)",
    width: "200%",
    margin: 0,
  },
  svg: { width: "50%" },
  "@keyframes wave": {
    from: {
      transform: "translateX(0%)",
    },
    to: { transform: "translateX(100%)" },
  },
  next: {
    display: "flex",
    width: "60px",
    height: "60PX",
    justifyContent: "center",
    justifySelf: "flex-end",
    alignItems: "center",
    marginTop: 20,
  },
});

export default function ShapeCurve() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.head}>
        <div className={classes.inHead}>
          <svg
            className={classes.svg}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 319"
          >
            <path
              fill="#ff3c00"
              fillOpacity="1"
              d="M0,160L80,145.3C160,139,320,85,480,101.3C640,117,800,203,960,224C1120,245,1280,203,1360,181.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
          <svg
            className={classes.svg}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 319"
          >
            <path
              fill="#ff3c00"
              fillOpacity="1"
              d="M0,160L80,145.3C160,139,320,85,480,101.3C640,117,800,203,960,224C1120,245,1280,203,1360,181.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
      <div className={classes.head1}>
        <div className={classes.inHead}>
          <svg
            className={classes.svg}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 319"
          >
            <path
              fill="#ff9b7d"
              fillOpacity="1"
              d="M0,160L80,145.3C160,139,320,85,480,101.3C640,117,800,203,960,224C1120,245,1280,203,1360,181.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
          <svg
            className={classes.svg}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 319"
          >
            <path
              fill="#ff9b7d"
              fillOpacity="1"
              d="M0,160L80,145.3C160,139,320,85,480,101.3C640,117,800,203,960,224C1120,245,1280,203,1360,181.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
      <div className={classes.curved}>
        <h1>SVG Path</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure nulla,
          in reiciendis perferendis nostrum, quia fugit deserunt velit dolores
          rerum sed repellat sequi itaque? Unde minus suscipit ut recusandae
          corrupti.
        </p>
        <div style={{ height: "70px" }}></div>
        <Box className={classes.next} border={4} borderRadius="50%">
          NEXT
        </Box>
      </div>
    </div>
  );
}
