import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import SocialLinks from './SocialLinks';


const Enter = function () {
  return (
    <div style={styles.containerStyle}>
      <img src={require("../assets/retro-light-logo.png")} alt="logo" style={{ height: "100px", display: "flex" }} />
      <Link style={{ textDecoration: "none", padding: "20px"}} to="/home"><Button style={styles.buttonStyle} variant="contained">Enter</Button></Link>
      <SocialLinks isLight={true}/>
      <video style={styles.videoStyle} autoPlay loop muted>
        <source
          src="https://s3.us-east-2.amazonaws.com/solfilm.io/entry-background.mp4"
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
    backgroundColor: "transparent",
    margin: "0"
  },
  videoStyle: {
    position: "absolute",
    display: "block",
    zIndex: "-1",
    width: "100vw",
    height: "100vh",
    objectFit: "cover"
  },
  buttonStyle: {
    width: "200px",
    backgroundColor: "#F5DABB",
    color: "#180400"
  }
};

export default Enter;