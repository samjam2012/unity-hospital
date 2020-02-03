import React from "react";
import { hot } from "react-hot-loader/root";
import { setConfig } from "react-hot-loader";
import { Router } from "@reach/router";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";

setConfig({
  showReactDomPatchNotification: false
});

const App = ({ store, W }) => (
  <Router>
    <Dashboard path="/" />
    <Login path="login" />
  </Router>
);

export default hot(App);
