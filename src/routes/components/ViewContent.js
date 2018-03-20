import React from 'react';

import BlogList from './BlogList';
import ResourceList from './ResourceList';

const ViewContent = () => {
  return(
    <div className="view-two-columns">
      <div className="container">
        <h2 className="block-title">Latest News</h2>
        <div className="view-two-columns__content">
          <BlogList/>
          <ResourceList/>
        </div>
      </div>
    </div>
  )
}

export default ViewContent;
