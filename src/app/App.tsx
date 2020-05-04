import React from "react";
import { hot } from "react-hot-loader/root";
import { Router, navigate } from "@reach/router";
import { useAuth } from "./hooks";
import Auth from "../interfaces/auth";
import Login from "./pages/Login";
import Portal from "./pages/Portal";
import Tools, { Report, Experiment } from "./pages/Tools";

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
        <Experiment path="/" />
      </Portal>

      <Tools path="tools">
        <Report path="/" />
        <Experiment path="experiment" />
      </Tools>
    </Router>
  );
};

export default hot(App);
