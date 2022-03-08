import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import SocialLinks from './SocialLinks';

const Mint = function () {
  return (
    <section id="mint" style={{ scrollMarginTop: "3rem" }}>
      <Box style={{ marginTop: "5rem" }}>
        <Typography variant="h4" style={{ marginBottom: "2rem" }}>Mint | Solfilm ISO 001 &#128064;</Typography>
        <Grid container spacing={5} alignItems="center" justifyContent="center" style={{ padding: "3rem 0 3rem 0" }}>
          <Grid item xs={12} md={6} align="center">
            <img alt="mint collection" style={{ maxHeight: "20rem", maxWidth: "98%", height: "auto", width: "auto" }} src={require("../assets/preview.gif")} />
          </Grid>
          <Grid item xs={12} md={6} align="center">
            <Box style={{ margin: "1.5rem" }}>
              <Typography variant="subtitle1">To Be Announced</Typography>
              <Button style={{ marginTop: "1.5rem", marginBottom: "1.5rem", width: "200px", height: "50px" }} disabled variant="contained">MINT 1.0 SOL</Button>
              <SocialLinks />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
};

export default Mint;