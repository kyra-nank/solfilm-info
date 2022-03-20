import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const Overview = function () {
  return (
    <Box style={{ paddingTop: "5rem", paddingBottom: "5rem" }}>
      <Typography variant="h5" style={{ marginBottom: "2rem", color: "#FFF" }}>HOW DOES SOLFILM WORK? &#129300;</Typography>

      <Grid container spacing={5}>
        <Grid item xs={12} md={6}>
          <Typography variant="subtitle1">
            <ul>
              <li>Mint unique film NFTs</li>
              <li>Buy, sell or hold in the market</li>
              <li>Collect a complete film strip for rewards</li>
              <li>Acquire C-41 chemical packs (coming soon)</li>
              <li>Develop negatives with chemicals to reveal full colour photos</li>
              <li>Enjoy exclusive rights and perks as a developed film holder</li>
              <li>Order physical prints, albums or posters featuring your NFTs</li>
              <li>Contribute your film photos and earn SOL (coming soon)</li>
            </ul>
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <img alt="film fade" style={{ maxHeight: "20rem", maxWidth: "95%", height: "auto", width: "auto" }} src="https://d3f9hpbghq9tuf.cloudfront.net/KN-Film.gif" />
          <Typography sx={{fontSize: "0.75rem", opacity: "0.6", marginTop: "0.5rem"}}>* Illustration of film development, Solfilm ISO 001</Typography>
        </Grid>
      </Grid>

    </Box>
  );
};

export default Overview;