import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AlternateTimeline from './AlternateTimeline';

const Roadmap = function () {
  return (
    <section id="roadmap" style={{ scrollMarginTop: "3rem" }}>
      <Box style={{ marginTop: "5rem" }}>
        <Typography style={{ marginBottom: "2rem" }} variant="h4">Roadmap</Typography>
        <AlternateTimeline />
      </Box>
    </section>
  );
};

export default Roadmap;