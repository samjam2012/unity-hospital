import React from "react";
import ReactDOM from "react-dom";

import "./app/App.scss";
import App from "./app/App";

import * as serviceWorker from "./utils/services/serviceWorker";

import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { ApolloProvider } from "@apollo/react-hooks";
import { ApolloServer } from "apollo-server";
import typeDefs from "./schema";
import { setConfig } from "react-hot-loader";

// const server = new ApolloServer({ typeDefs });

setConfig({
  showReactDomPatchNotification: false
});

// const cache = new InMemoryCache();
// const link = new HttpLink({
//   uri: "https://graphql-pokemon.now.sh/"
// });

// const client = new ApolloClient({
//   cache,
//   link
// });

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
