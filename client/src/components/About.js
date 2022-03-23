import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const About = function () {
  return (
    <section id="about">
      <Box style={{ paddingTop: "5rem", paddingBottom: "5rem" }}>
        <Typography variant="h5" style={{ marginBottom: "2rem", color: "#FFF" }}>SOLFILM &#127902;</Typography>
        <Typography variant="subtitle1">
          The only NFT initiative tied directly to physical film photos that are truly unique. 
          Minting a Solfilm NFT is the beginning of a rewarding experience. 
          You will be granted a 35mm negative photo, providing a glimpse of the full moment captured on film. 
          To reveal this moment in its entirety Solfilm will release C-41 chemical packs. 
          When your NFTs are treated with these chemicals the true colour image is revealed! 
          We aim to share this magical experience with owners and photographers worldwide for years to come.
          Welcome to our growing community.
        </Typography>
        <img alt="film strip" style={{ maxWidth: "100%", maxHeight: "500px", width: "auto", height: "auto", marginTop: "4rem" }} src="https://d3f9hpbghq9tuf.cloudfront.net/home-strip.png" />
        <Typography sx={{fontSize: "0.75rem", opacity: "0.6", marginTop: "0.5rem"}}>* Niagara Falls 1980s, Solfilm ISO 001</Typography>
      </Box>
    </section>

  );
};

export default About;
