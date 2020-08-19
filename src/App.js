import React from "react";
import logo from "./logo.svg";
// import "./App.css";
import CustomNavBar from "./components/navbar";
import CustomMap from "./components/maps";
import { render } from "@testing-library/react";

function App() {
  return (
    <React.Fragment>
      <CustomNavBar />
      <CustomMap></CustomMap>
    </React.Fragment>
  );
}
/*
<div className="App">
<header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <p>
    Edit <code>src/App.js</code> and save to reload.
  </p>
  <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    Learn React
  </a>
</header>
</div> */

export default App;
