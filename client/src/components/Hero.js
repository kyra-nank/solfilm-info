import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Hero = function () {
  return (
    <Box style={styles.containerStyle}>
      <img style={styles.backgroundStyle} src={require("../assets/background.png")} alt="film gradient background" />
      <Box style={styles.textStyle}>
        <Typography align="center" variant="h4" style={{ marginBottom: "1rem" }}>Film x NFTs</Typography>
        <Typography align="center" variant="subtitle1">Each piece is truly 1 of 1 in the <br />physical and virtual world.</Typography>
      </Box>
      <img style={styles.stripStyle} src={require("../assets/strip.png")} alt="film strip" />
    </Box>
  );
};

const styles = {
  textStyle: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    flex: "1",
    justifyContent: "center",
    padding: "6rem 0 4rem 0"
  },
  containerStyle: {
    height: "90vh",
    backgroundColor: "transparent"
  },
  stripStyle: {
    left: "50%",
    marginLeft: "-50vw",
    marginRight: "-50vw",
    maxWidth: "100vw",
    position: "relative",
    right: "50%",
    width: "100vw"
  },
  backgroundStyle: {
    left: "50%",
    marginLeft: "-50vw",
    marginRight: "-50vw",
    maxWidth: "100vw",
    position: "absolute",
    right: "50%",
    width: "100vw",
    zIndex: "-100",
    height: "100%"
  }
};

export default Hero;