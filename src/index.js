import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
// import "./components/styles/GlobalStyle.scss";

import App from "./App";
import NavBar from "./components/layout/navigation/NavBar/NavBar";
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <NavBar />
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
