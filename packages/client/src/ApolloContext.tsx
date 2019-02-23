import { InMemoryCache, NormalizedCacheObject } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import React from "react";
import { ApolloProvider as ReactApolloProvider } from "react-apollo";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: createHttpLink({ uri: "/.netlify/functions/index" })
});

export const ApolloContext = React.createContext<
  ApolloClient<NormalizedCacheObject>
>(client);

export const ApolloProvider: React.SFC = ({ children }) => (
  <ApolloContext.Provider value={client}>
    <ReactApolloProvider client={client}>{children}</ReactApolloProvider>
  </ApolloContext.Provider>
);
