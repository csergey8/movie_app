import React, { Component } from 'react';
import MovieBrowser from './modules/movie-browser/movie-browser.container';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';


const theme = createMuiTheme();

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <MovieBrowser />
      </MuiThemeProvider>
    );
  }
}

export default App;
