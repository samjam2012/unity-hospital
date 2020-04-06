import React from "react";
import { Auth0Context } from "../../providers/auth";
import Auth from "../../interfaces/auth";
const { useContext } = React as any;

export default (): Auth => useContext(Auth0Context);
