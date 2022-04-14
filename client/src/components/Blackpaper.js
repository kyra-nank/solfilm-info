import React, { Component } from 'react';
import { Button } from '@mui/material';

const Pdf = 'https://d3f9hpbghq9tuf.cloudfront.net/Solfilm-BlackPaper-v.1.2.pdf';

class Blackpaper extends Component {

  render() {

    return (
      <Button href={Pdf} target="_blank" style={styles.blackpaperStyle} variant="contained">Black Paper</Button>
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