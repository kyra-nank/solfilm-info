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
              <li>Mint a unique negative photo from our collection</li>
              <li>Buy, sell or hold in the negative market</li>
              <li>Collect a film strip to unlock positives</li>
              <li>Redeem your complete strip to receive NFT positives</li>
              <li>Enjoy the evolution of your NFTs in full colour/b&w</li>
              <li>Buy, sell or hold in the exclusive positive market</li>
              <li>Order physical copies or a keychain album of your collection</li>
              <li>Contribute your film photos and earn SOL (coming soon)</li>
            </ul>
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <img alt="film fade" style={{ maxHeight: "20rem", maxWidth: "95%", height: "auto", width: "auto" }} src={require("../assets/KN-Film.gif")} />
          <Typography sx={{fontSize: "0.75rem", opacity: "0.6", marginTop: "0.5rem"}}>* Illustration of film development, Solfilm ISO 001</Typography>
        </Grid>
      </Grid>

    </Box>
  );
};

export default Overview;