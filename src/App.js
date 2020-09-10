import React from "react";
import "./App.css";
import NavBottomBar from "./body/nav-bottom-bar/NavBottomBar";
import PrimarySearchAppBar from "./body/app-bar/PrimarySearchAppBar";
import { TableFooter } from "@material-ui/core";
import avengers from "./assets/icon/avengers-icon.png";

function App() {
  return (
    <div className="App">
      <div>
        <PrimarySearchAppBar />
      </div>
      <img src={avengers} className="App-logo" alt="avengers" />
      <div style={{ width: "100%" }}>
        <NavBottomBar />
      </div>
    </div>
  );
}

export default App;
