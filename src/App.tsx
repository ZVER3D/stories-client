import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { createMuiTheme, CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

import Layout from './components/Layout';
import Router from './routes';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
});

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <CssBaseline />
          <ThemeProvider theme={theme}>
            <Layout>
              <Router />
            </Layout>
          </ThemeProvider>
        </>
      </BrowserRouter>
    );
  }
}

export default App;
