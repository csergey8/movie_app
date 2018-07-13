import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import NavBar from './navBar';

import * as movieActions from './movie-browser.actions';
import * as movieHelpers from './movie-browser.helpers';
import MovieList from './movie-list/movie-list.component';
import * as scrollHelpers from '../common/scroll.helpers';



class MovieBrowser extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPage: 1
    }
  }

  componentDidMount() {
    window.onscroll = this.handleScroll;
    this.props.getTopMovies(1);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    console.log(scrollHelpers.getScrollDownPercantage(window));
    const { topMovies } = this.props;
    if(!topMovies.isLoading) {
      let percentageScrolled = scrollHelpers.getScrollDownPercantage(window);
      if(percentageScrolled > .8) {
        const nextPage = this.state.currentPage + 1;
        this.props.getTopMovies(nextPage);
        this.setState({currentPage: nextPage})
      }
    }
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


