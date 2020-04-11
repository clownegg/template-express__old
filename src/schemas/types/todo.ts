import {gql} from 'apollo-server-express';

export const todoTypeDefs = gql`
  type Todo {
    title: String
    done: Boolean
  }
`;
