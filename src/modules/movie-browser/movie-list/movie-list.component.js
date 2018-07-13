import React from 'react';
import { Row, Col } from 'react-bootstrap';
import MovieCard from '../movie-card/movie-card.component';
import Loader from '../../common/loader.component';

const styles = {
  movieColumn: {
    marginBottom: '20px'
  }
}

const MovieList = ({movies, isLoading}) => {
  const movieColumn = movies ? movies.map(movie => (
    <Col style={styles.movieColumn} key={movie.id} xs={12} sm={4} md={3} lg={3}>
      <MovieCard movie={movie} />
    </Col>
  )) : null;
  return (
    <Row>
      {movieColumn}
      <Loader />
    </Row>
  )
}


export default MovieList;
