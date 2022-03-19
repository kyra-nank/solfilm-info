import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const About = function () {
  return (
    <section id="about">
      <Box style={{ paddingTop: "5rem", paddingBottom: "5rem" }}>
        <Typography variant="h5" style={{ marginBottom: "2rem", color: "#FFF" }}>SOLFILM &#127902;</Typography>
        <Typography variant="subtitle1">The only NFT initative tied directly to physical film photos that are truly unique. We allow members to mint negatives, collect the corresponding film strips and exchange their strips for NFTs of the positive photos. Through collaboration with photographers wordwide, we hope to grow our collection and provide a new source of income to contributors!</Typography>
        <img alt="process overview" style={{ maxWidth: "100%", maxHeight: "500px", width: "auto", height: "auto", marginTop: "4rem" }} src={require("../assets/home-strip.png")} />
        <Typography sx={{fontSize: "0.75rem", opacity: "0.6", marginTop: "0.5rem"}}>* Niagara Falls 1980s, Solfilm ISO 001</Typography>
      </Box>
    </section>

  );
};

export default About;
