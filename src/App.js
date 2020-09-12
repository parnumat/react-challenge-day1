import React from "react";
import "./App.css";
import NavBottomBar from "./ui/body/nav-bottom-bar/NavBottomBar";
import PrimarySearchAppBar from "./ui/body/app-bar/PrimarySearchAppBar";
import DarkMode from "./ui/body/main-content/dark-mode-toggle/DarkMode";
import ReduxMainApp from "./ui/learn-redux/ReduxMainApp";
import ShapeHover from "./ui/body/main-content/ShapeHover";

function App() {
  return (
    <div className="App">
      <div>
        <PrimarySearchAppBar />
      </div>
      <div style={{ width: "100%" }}>
        <ShapeHover />
        {/* <img src={avengers} className="App-logo" alt="avengers" /> */}
        {/* <DarkMode /> */}
        <ReduxMainApp />
      </div>
      <div style={{ width: "100%" }}>
        <NavBottomBar />
      </div>
    </div>
  );
}

export default App;
