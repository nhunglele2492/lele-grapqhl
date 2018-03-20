import React, { Component } from 'react';
import DefaultLayout from '../layout/DefaultLayout';

import Card from '../components/Card';
import ViewContent from '../components/ViewContent';

class Home extends Component {
  render() {
    return (
      <DefaultLayout>
        <Card/>
        <ViewContent/>
      </DefaultLayout>
    );
  }
}

export default Home;
