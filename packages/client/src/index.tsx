import React from "react";
import ReactDOM from "react-dom";
import Loadable from "react-loadable";

const Tune = Loadable({
  loader: async () => (await import("./Tune")).Tune,
  loading: () => null
});

const ApolloProvider = Loadable({
  loader: async () => (await import("./ApolloContext")).ApolloProvider,
  loading: () => null
});

ReactDOM.render(
  <ApolloProvider>
    <Tune />
  </ApolloProvider>,
  document.body.appendChild(document.createElement("div"))
);
