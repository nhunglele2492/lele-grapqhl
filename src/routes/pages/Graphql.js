import React from 'react';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const ReactGraphql = ({ data: { blogs, refetch } }) => {
  return (
    <div>
      <button onClick={() => refetch()}>Refresh</button>
      <ul>{blogs && blogs.map(todo => <li key={todo.nid}><h1>{todo.title}</h1><div dangerouslySetInnerHTML={{__html: todo.body}}></div></li>)}</ul>
    </div>
  );
}

export default graphql(gql`
  query TodoAppQuery {
    blogs{
      nid
      title
      body
    }
  }
`)(ReactGraphql);
