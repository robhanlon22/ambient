import React from "react";
import ReactDOM from "react-dom";
import Loadable from "react-loadable";

const Hello = Loadable({
  loader: async () => (await import("./Hello")).Hello,
  loading: () => null
});

const ApolloProvider = Loadable({
  loader: async () => (await import("./ApolloContext")).ApolloProvider,
  loading: () => null
});

ReactDOM.render(
  <ApolloProvider>
    <Hello />
  </ApolloProvider>,
  document.body.appendChild(document.createElement("div"))
);
