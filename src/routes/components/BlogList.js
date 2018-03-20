import React from 'react';
import { Link } from "react-router-dom";

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const BlogList = ({ data: { blogs, refetch } }) => {
  return (
    <div className="view-two-columns__item">
      <h3 className="view-two-columns__title">News Blog</h3>
      <ul className="view-two-columns__list">
        {blogs && blogs.map((todo, i) =>
          <li key={i}><Link to={"blog/" + todo.nid}>{todo.title}</Link></li>
        )}
      </ul>
    </div>
  );
}

export default graphql(gql`
  query TodoAppQuery {
    blogs{
      nid
      title
    }
  }
`)(BlogList);
