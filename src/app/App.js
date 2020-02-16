import React from "react";
import { hot } from "react-hot-loader/root";
import { Router } from "@reach/router";
import { Welcome, Login, Dashboard } from "../pages";

const App = ({ store, W }) => (
  <Router>
    <Welcome path="welcome" />
    <Login path="login" />
    <Dashboard path="/" />
  </Router>
);

export default hot(App);
