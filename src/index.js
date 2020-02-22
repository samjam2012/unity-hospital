import React from "react";
import ReactDOM from "react-dom";

import "./app/App.scss";
import App from "./app/App";

import { unregister } from "./services/serviceWorker";

import { ApolloProvider } from "@apollo/react-hooks";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";

import { setConfig } from "react-hot-loader";
setConfig({
  showReactDomPatchNotification: false
});

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: "https://graphql-pokemon.now.sh/"
});

const client = new ApolloClient({
  cache,
  link
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
unregister();
