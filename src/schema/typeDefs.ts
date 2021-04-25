import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type User {
    id: String
    email: String
  }

  type Query {
    hello: String
    users: [User]
  }
`;
