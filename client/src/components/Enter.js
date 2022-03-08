import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import SocialLinks from './SocialLinks';

const Enter = function () {
  return (
    <div style={styles.containerStyle}>
      <img src={require("../assets/logo.png")} alt="logo" style={{ height: "100px", display: "flex" }} />
      <Link style={{ textDecoration: "none", padding: "20px" }} to="/home"><Button style={styles.buttonStyle} variant="contained">Enter</Button></Link>
      <SocialLinks />
      <video style={styles.videoStyle} autoPlay loop muted>
        <source
          src={require("../assets/background-video.mp4")}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

const styles = {
  containerStyle: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    flex: "1",
    justifyContent: "center",
    height: "100vh",
    maxWidth: "100vw",
    backgroundColor: "transparent"
  },
  videoStyle: {
    position: "absolute",
    zIndex: "-1",
    margin: "0"
  },
  buttonStyle: {
    width: "200px",
    backgroundColor: "#00C2CB",
    color: "black"
  }
};

export default Enter;