import React, { Component } from 'react';
import { Card, CardHeader, CardMedia  } from '@material-ui/core'; 


const styles = {
  cardHeader: {
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
    height: 200,
    overflow: 'hidden'
  },
  bgImage: {
    width: '100%',
    height: 'auto'
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
    console.log(this.props.movie);
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
        
        >
        <img style={styles.bgImage} src={movie.poster_path} />
        </CardMedia>
        <CardHeader
          style={styles.cardHeader}
          title={movie.title}
          subtitle={movie.subtitle}
        />
      </Card>
    )
  }
}


export default MovieCard;
