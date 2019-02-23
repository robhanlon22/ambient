import gql from "graphql-tag";
import React from "react";
import { Query } from "react-apollo";

const query = gql`
  query HelloQuery {
    hello
  }
`;

export const Hello: React.SFC = () => (
  <Query query={query}>
    {({ loading, data }) =>
      loading ? "Loading" : <pre>{JSON.stringify(data)}</pre>
    }
  </Query>
);
