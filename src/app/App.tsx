import React from "react";
import { hot } from "react-hot-loader/root";
import { useAuth0 } from "../services/auth/react-auth0-spa";

import { Router, navigate } from "@reach/router";
import { Login, Portal } from "../pages";
import AuthProps from "../interfaces/_";

const App = () => {
  const { isAuthenticated, loading }: AuthProps = useAuth0();

  if (!loading && !isAuthenticated) navigate("/login");

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
