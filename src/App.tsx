import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Layout from './components/Layout';
import Router from './routes';

class App extends Component {
  render() {
    return (
      <Layout>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </Layout>
    );
  }
}

export default App;
