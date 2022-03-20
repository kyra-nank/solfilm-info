import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Team = function () {
  return (
    <section id="team">
      <Box style={{ paddingTop: "5rem", paddingBottom: "5rem" }}>
        <Typography variant="h5" style={{ marginBottom: "2rem", color: "#FFF" }}>OUR TEAM &#128075;</Typography>
        
        <Grid container spacing={5} sx={{paddingTop: "2rem"}}>
          
          <Grid item xs={12} md={6} align="center">
            <img alt="kn pic" style={{ height: "auto", maxWidth: "98%", width: "auto", maxHeight: "20rem"}} src="https://d3f9hpbghq9tuf.cloudfront.net/kyra-headshot2.png" />
            
            <Box sx={{paddingTop: "2rem"}}>
            <Typography sx={{color: "#FFF"}} align="center" variant="h5"><em>polumathes</em></Typography>
            <Typography align="center" variant="h6">Developer</Typography>
            </Box>
            
          </Grid>

          <Grid item xs={12} md={6} align="center">
            <img alt="am pic" style={{ height: "auto", maxWidth: "98%", width: "auto", maxHeight: "20rem"}} src="https://d3f9hpbghq9tuf.cloudfront.net/alejandro-headshot2.png" />
            
            <Box sx={{paddingTop: "2rem"}}>
            <Typography sx={{color: "#FFF"}} align="center" variant="h5"><em>blvckjupiter</em></Typography>
            <Typography align="center" variant="h6">Photographer</Typography>
            </Box>
          </Grid>

        </Grid>
      </Box>
    </section>
  );
};

export default Team;