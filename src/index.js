import React from "react";
import ReactDOM from "react-dom";
import "./app/App.scss";
import App from "./app/App";
import * as serviceWorker from "./utils/services/serviceWorker";
import { setConfig } from "react-hot-loader";

setConfig({
  showReactDomPatchNotification: false
});

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
