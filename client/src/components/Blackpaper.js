import React, { Component } from 'react';
import { Button } from '@mui/material';

import Pdf from '../assets/blackpaper.pdf';


class Blackpaper extends Component {

  render() {

    return (
      <Button href={Pdf} target="_blank" style={styles.blackpaperStyle} variant="contained">Blackpaper</Button>
    );

  }
}

const styles = {
  blackpaperStyle: {
    backgroundColor: "#F5DABB",
    color: "#180400"
  }
};

export default Blackpaper;