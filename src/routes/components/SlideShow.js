import React from 'react';
import { Link } from "react-router-dom";

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Slider from 'react-slick';

import EndPointUrl from '../variables';

var settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false
};

const SlideShow = ({ data: { resources, refetch } }) => {
  return (
    <div className="featured-resources">
      <Slider {...settings}>
        {resources && resources.map((todo, i) =>
          <div className="slide__item" key={i}>
            <div className="slide__media bg--dark-blue--overlay" style={{backgroundImage: "url(" + EndPointUrl  + todo.field_lb_image + ")"}}></div>
            <div className="slide__constrained ">
              <div className="slide__caption container">
                <h2 className="slide__title">{todo.title}</h2>
                <div className="slide__description" dangerouslySetInnerHTML={{__html: todo.body}}></div>
                <div className="slide__link"><Link to={"resources/" + todo.nid} className="btn">{todo.field_lb_text_link}</Link></div>
              </div>
            </div>
          </div>
          )
        }
       </Slider>
    </div>
  );
}

export default graphql(gql`
  query TodoAppQuery {
    resources{
      nid
      title
      body
      field_lb_image
      field_lb_text_link
    }
  }
`)(SlideShow);
