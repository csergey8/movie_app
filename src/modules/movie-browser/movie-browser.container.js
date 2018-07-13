import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import NavBar from './navBar';

import * as movieActions from './movie-browser.actions';
import * as movieHelpers from './movie-browser.helpers';
import MovieList from './movie-list/movie-list.component';



class MovieBrowser extends Component {

  componentDidMount() {
    this.props.getTopMovies(1)
  }
  
  render() {
    const {topMovies}  = this.props;
    const movies = movieHelpers.getMovieList(topMovies.response);

    return (
      <div>
        <NavBar />
        <Grid>
          <Row>
            <p>Search will go here</p>  
          </Row>
          <Row>
            <MovieList movies={movies} isLoading={topMovies.isLoading} />
          </Row>
        </Grid>
      </div>
    )
  }
}


export default connect(
  (state) => ({
    topMovies: state.movieBrowser.topMovies
  }),
  {...movieActions}
)(MovieBrowser);


