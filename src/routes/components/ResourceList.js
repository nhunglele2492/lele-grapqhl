import React from 'react';
import { Link } from "react-router-dom";

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const ResourceList = ({ data: { resources, refetch } }) => {
  return (
    <div className="view-two-columns__item">
      <h3 className="view-two-columns__title">New Resources</h3>
      <ul className="view-two-columns__list">
        {resources && resources.map((todo, i)=>
          <li key={i}><Link to={"resources/" + todo.nid}>{todo.title}</Link></li>
        )}
      </ul>
    </div>
  );
}

export default graphql(gql`
  query TodoAppQuery {
    resources{
      nid
      title
    }
  }
`)(ResourceList);
