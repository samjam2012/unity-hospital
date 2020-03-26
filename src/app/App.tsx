import React from "react";
import { hot } from "react-hot-loader/root";
import { Router, navigate } from "@reach/router";

import { Login, Portal } from "./pages";
import Props from "../interfaces/app";

const App = ({ isAuthenticated, loading }: Props) => {
  if (loading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) navigate("/login");

  return (
    <Router>
      <Login path="login" />

      <Portal path="/"></Portal>
    </Router>
  );
};

export default hot(App);
