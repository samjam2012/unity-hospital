import React from "react";
import { hot } from "react-hot-loader/root";
import { Router } from "@reach/router";
import { Portal, Login } from "../pages";

const App = () => (
  <Router>
    <Login path="login" />
    <Portal path="/" />
  </Router>
);

export default hot(App);
