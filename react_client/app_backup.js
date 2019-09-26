import React from 'react';
import gql from "graphql-tag"; 
import { graphql } from 'react-apollo'; 

const TodoQuery = gql`
{
  todos{
    id 
    text 
    complete
  }
}
`;


function App() {
  return (
    <h1>Hello World</h1>
  );
}

export default graphql(TodoQuery) (App);
