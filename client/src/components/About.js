import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const About = function () {
  return (
    <section id="about" style={{ scrollMarginTop: "3rem" }}>
      <Box style={{ marginTop: "7rem" }}>
        <Typography variant="h4" style={{ marginBottom: "2rem" }}>Solfilm</Typography>
        <Typography variant="subtitle1">The only NFT initative tied directly to physical film photos that are truly unique. We allow members to mint negatives, collect the corresponding film strips and exchange their strips for NFTs of the positive photos. Through collaboration with photographers wordwide, we hope to grow our collection and provide a new source of income to contributors!</Typography>
      </Box>
    </section>

  );
};

export default About;
