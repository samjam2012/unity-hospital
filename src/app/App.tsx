import React from "react";
import { hot } from "react-hot-loader/root";
import { useAuth0 } from "../services/auth/react-auth0-spa";

import { Router } from "@reach/router";
import { Login, Portal } from "../pages";

const App = () => {
  const { loading } = useAuth0();

  return loading ? (
    <div>Loading...</div>
  ) : (
    <Router>
      <Login path="login" />
      <Portal path="/" />
    </Router>
  );
};

export default hot(App);
