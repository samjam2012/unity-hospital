import React from "react";
import { render } from "react-dom";
import { setConfig } from "react-hot-loader";
import App from "./app/App";
import "./app/App.scss";

import { Auth0Provider } from "./services/auth/react-auth0-spa";
import { unregister } from "./services/serviceWorker";
import config from "./services/auth/auth_config.json";

import history from "./services/history";

setConfig({
  showReactDomPatchNotification: false
});

const onRedirectCallback = appState => {
  history.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

render(
  <Auth0Provider
    domain={config.domain}
    client_id={config.clientId}
    redirect_uri={window.location.origin}
    onRedirectCallback={onRedirectCallback}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
unregister();
