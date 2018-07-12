import React, { Component } from 'react';
import { Card, CardTitle, CardMedia } from '@material-ui/core';

const styles = {
  cardTitle: {
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden'
  },
  cardMedia: {
    maxHeight: 394,
    overflow: 'hidden'
  },
  card: {
    cursor: 'pointer',
    height: 400,
    overflow: 'hidden'
  },
  bgImage: {
    width: '100%'
  }
};


class MovieCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMouseOver: false
    };
  }
  render() {
    const { movie, openMovieModal } = this.props;
    const subtitle = this.state.isMouseOver ? movie.overview : null;
    return (
      <Card
      style={styles.card}
      onMouseOver={()=> this.setState({isMouseOver: true})}
      onMouseLeave={()=> this.setState({isMouseOver: false})}
      >
      {/*<CardTitle title={<div style={styles.cardTitle}>{movieTitle}</div>} /> */}
        <CardMedia
        style={styles.cardMedia}
        overlay={
          <CardTitle
          title={movie.title}
          subtitle={movie.subtitle}
          />
        }
        >
        <img style={styles.bgImage} src={movie.poster_path} />
        </CardMedia>
      </Card>
    )
  }
}


export default MovieCard;
