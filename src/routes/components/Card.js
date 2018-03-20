import React from 'react';
import { Link } from "react-router-dom";

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import EndPointUrl from '../variables';

const Card = ({ data: { blogs, refetch } }) => {
  return (
    <div className="block-card-4">
      <div className="container">
        <div className="block-card-4__grid">
          {blogs && blogs.map((todo, i) =>
            <div className="block-card-4__item bg--light bg--light-white" key={i}>
              <div className="block-card-4__image"><img src={EndPointUrl  + todo.field_bl_image} alt=""/></div>
              <div className="block-card-4__name">{ todo.field_name }</div>
              <div className="block-card-4__job">{ todo.field_bl_job }</div>
              <div className="block-card-4__location">{ todo.field_bl_location }</div>
              <div className="block-card-4__description" dangerouslySetInnerHTML={{__html: todo.body}}></div>
              <div className="block-card-4__links"><Link to={"blog/" + todo.nid}>{ todo.field_bl_text_link }</Link></div>
            </div>
            )
          }
        </div>
      </div>
    </div>
  );
}

export default graphql(gql`
  query TodoAppQuery {
    blogs{
      nid
      body
      field_name
      field_bl_image
      field_bl_job
      field_bl_location
      field_bl_text_link
    }
  }
`)(Card);
