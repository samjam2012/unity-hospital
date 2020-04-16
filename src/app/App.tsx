import React from "react";
import { hot } from "react-hot-loader/root";
import { Router, navigate } from "@reach/router";
import { useAuth } from "./hooks";
import Auth from "../interfaces/auth";
import Login from "./pages/Login";
import Portal from "./pages/Portal";
import Tools, { Home, Experiment } from "./pages/Tools";

const App = () => {
  const { isAuthenticated, loading }: Auth = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) navigate("/login");

  return (
    <Router>
      <Login path="login" />

      <Portal path="*">
        <Home path="/" />
      </Portal>

      <Tools path="tools">
        <Home path="/" />
        <Experiment path="experiment" />
      </Tools>
    </Router>
  );
};

export default hot(App);
