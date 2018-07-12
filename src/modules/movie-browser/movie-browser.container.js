import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import NavBar from './navBar';


class MovieBrowser extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Grid>
          <Row>
            <p>Search will go here</p>  
          </Row>
          <Row>
            <p>Movie list will go here</p>
          </Row>
        </Grid>
      </div>
    )
  }
}


export default  MovieBrowser;