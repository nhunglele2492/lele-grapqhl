import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home  from './pages/homePage';
import StyleGuide  from './pages/StyleGuide';

import '../Assets/css/styles.min.css';

export default () => (
  <Router>
    <div>
      <Route exact path="/" component={Home}/>
      <Route exact path="/styleguide" component={StyleGuide}/>
    </div>
  </Router>
);
