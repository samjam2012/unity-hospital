import React from "react";
import { hot } from "react-hot-loader/root";
import { Router } from "@reach/router";
import { Welcome, Portal } from "../pages";

const App = () => (
  <Router>
    <Welcome path="welcome" />
    <Portal path="/:userType" />
  </Router>
);

export default hot(App);
