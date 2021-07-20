import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BatchHttpLink } from '@apollo/client/link/batch-http';

const link = new BatchHttpLink({
  uri: "https://countries.trevorblades.com/",
  batchMax: 25,
});

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

export const ApolloClientProvider = ({ children }) => {
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
};
