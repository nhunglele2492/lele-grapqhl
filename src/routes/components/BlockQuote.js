import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const BlockQuote = ({ data: { quotes, refetch } }) => {
  return (
    <div className="block-quote-1">
      { quotes && quotes.map(todo =>
        <div className="container">
          <blockquote className="block-quote-1__quote" dangerouslySetInnerHTML={{__html: todo.body}}></blockquote>
          <div className="block-quote-1__name">{todo.title}</div>
        </div>
      )}
    </div>
  );
}

export default graphql(gql`
  query TodoAppQuery {
    quotes{
      nid
      title
      body
    }
  }
`)(BlockQuote);
