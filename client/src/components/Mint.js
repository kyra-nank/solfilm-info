import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import SocialLinks from './SocialLinks';

const Mint = function () {
  return (
    <section id="mint">
      <Box style={{ paddingTop: "5rem", paddingBottom: "5rem" }}>
        
        <Typography variant="h5" style={{ marginBottom: "2rem", color: "#FFF" }}>MINT | "Solfilm ISO 001" &#128064;</Typography>
        
        <Grid container spacing={5} alignItems="center" justifyContent="center" sx={{paddingTop: "2rem"}}>
          
          <Grid item xs={12} md={6} align="center">
            <img alt="mint collection" style={{ maxHeight: "20rem", maxWidth: "98%", height: "auto", width: "auto" }} src={require("../assets/preview.gif")} />
          </Grid>
          
          <Grid item xs={12} md={6} align="center">
            <Box>
              <Typography variant="subtitle1">To Be Announced</Typography>
              <Button disableRipple disableFocusRipple style={styles.buttonStyle} variant="contained">MINT 1.0 SOL</Button>
              <SocialLinks isLight={true}/>
            </Box>
          </Grid>

        </Grid>

      </Box>
    </section>
  );
};

const styles = {
  buttonStyle: {
    marginTop: "1.5rem",
    marginBottom: "1.5rem",
    width: "200px",
    height: "50px",
    color: "#180400",
    backgroundColor: "#FFF",
    opacity: "0.5",
    cursor: "default"
  }
}

export default Mint;