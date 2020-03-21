import React from "react";
import { Auth0Context } from "../../providers/auth";
const { useContext } = React as any;

export default () => useContext(Auth0Context);
