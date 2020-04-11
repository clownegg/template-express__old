import {gql} from 'apollo-server-express';

export const todoQuery = gql`
  type Query {
    todos: [Todo]
  }
`;
