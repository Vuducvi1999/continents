import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./App.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Routers from "./Routers.jsx";

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com/",
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Routers />
  </ApolloProvider>,
  document.getElementById("root")
);
