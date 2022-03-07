import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Overview = function () {
  return (
    <Box style={{ marginTop: "10rem", marginBottom: "10rem" }}>
      <Typography variant="h4" style={{ marginBottom: "2rem" }}>How does Solfilm work? &#129300;</Typography>
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
    </Box>
  );
};

export default Overview;