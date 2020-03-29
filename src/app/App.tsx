import React from "react";
import { hot } from "react-hot-loader/root";
import { Router, navigate } from "@reach/router";

import { useAuth } from "./hooks";
import { Login, Portal, Home } from "./pages";
import Props from "../interfaces/app";

const App = () => {
  const { isAuthenticated, loading }: Props = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) navigate("/login");

  return (
    <Router>
      <Login path="login" />

      <Portal path="/">
        <Home path="/" />
      </Portal>
    </Router>
  );
};

export default hot(App);
