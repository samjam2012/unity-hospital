import React from "react";
import { hot } from "react-hot-loader/root";
import { Redirect, Router, navigate } from "@reach/router";
import { useAuth } from "./hooks";
import Auth from "../interfaces/auth";
import { Login, Dashboard } from "./pages";
import { Home, Experiment } from "./pages/Dashboard";

const App = () => {
  const { isAuthenticated, loading }: Auth = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) navigate("/login");

  return (
    <Router>
      <Login path="login" />

      <Dashboard path="/">
        <Home path="*" />
        <Experiment path="experiment" />
      </Dashboard>
    </Router>
  );
};

export default hot(App);
