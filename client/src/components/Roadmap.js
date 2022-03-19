import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AlternateTimeline from './AlternateTimeline';

const Roadmap = function () {
  return (
    <section id="roadmap">
      <Box style={{ paddingTop: "5rem", paddingBottom: "5rem"  }}>
        <Typography style={{ marginBottom: "2rem", color: "#FFF" }} variant="h5">ROADMAP &#128640;</Typography>
        <AlternateTimeline />
      </Box>
    </section>
  );
};

export default Roadmap;