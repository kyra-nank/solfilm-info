import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const About = function () {
  return (
    <section id="about" style={{ scrollMarginTop: "3rem" }}>
      <Box style={{ marginTop: "10rem" }}>
        <Typography variant="h4" style={{ marginBottom: "2rem" }}>Solfilm &#127902;</Typography>
        <Typography variant="subtitle1">The only NFT initative tied directly to physical film photos that are truly unique. We allow members to mint negatives, collect the corresponding film strips and exchange their strips for NFTs of the positive photos. Through collaboration with photographers wordwide, we hope to grow our collection and provide a new source of income to contributors!</Typography>
        <img alt="process overview" style={{ maxWidth: "100%", maxHeight: "500px", width: "auto", height: "auto", marginTop: "4rem" }} src={require("../assets/process-lg.png")} />
      </Box>
    </section>

  );
};

export default About;
