import Reacts  from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Hero = function () {

  return (
    <Box style={styles.containerStyle}>
      <Box style={{zIndex: "1", position: "absolute"}}> 
      <Typography style={{color:"#FFF"}} align="center" variant="h4"><strong>Reveal the Story</strong></Typography>
      <Typography style={{color:"#FFF"}} align="center" variant="subtitle1">Develop Film on Solana</Typography>
      </Box>
      <video style={styles.videoStyle} autoPlay loop muted>
        <source
          src={require("../assets/hero-background.mp4")}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </Box>
  );
};

const styles = {
  containerStyle: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    flex: "1",
    justifyContent: "center",
    height: "86vh",
    backgroundColor: "transparent",
    margin: "0",
    cursor: "url('https://s3.us-east-2.amazonaws.com/solfilm.io/camera-cursor.png'), auto"
  },
  videoStyle: {
    opacity: "0.5",
    position: "relative",
    marginLeft: "-50vw",
    marginRight: "-50vw",
    maxWidth: "100vw",
    maxHeight: "100%",
    width: "100vw",
    height: "100%",
    objectFit: "cover"
  }
};

export default Hero;