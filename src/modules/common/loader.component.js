import React from 'react';
import _ from 'lodash';
import {CircularProgress} from '@material-ui/core';

const styles = {
  refreshStyle: {
    position: 'relative',
    display: 'block',
    margin: '0 auto'
  }
}


const Loader = ({ isLoading, children }) => {
  if(isLoading) {
  return (
    <CircularProgress
    style={styles.refreshStyle}
    top={0}
    left={0}
    size={80}
    status={'loading'}
    />
  );
}
  return children ? children : null;
}

export default Loader;
