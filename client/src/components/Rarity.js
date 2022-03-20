import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TraitRarity from './TraitRarity';

const Rarity = function () {


  const renderGrid = function () {
    return (
      <Grid container spacing={3}>
        <Grid item>
          <Typography sx={{color: "#FFF"}} variant="subtitle1"><strong>Type</strong></Typography>
          <TraitRarity trait={{ type: "Coloured", rarity: "88.3%" }} />
          <TraitRarity trait={{ type: "B&W", rarity: "11.7%" }} />
        </Grid>
        <Grid item>
          <Typography sx={{color: "#FFF"}} variant="subtitle1"><strong>Strip Length</strong></Typography>
          <TraitRarity trait={{ type: "1", rarity: "0.4%" }} />
          <TraitRarity trait={{ type: "2", rarity: "6.7%" }} />
          <TraitRarity trait={{ type: "3", rarity: "13.8%" }} />
          <TraitRarity trait={{ type: "4", rarity: "43.5%" }} />
          <TraitRarity trait={{ type: "5", rarity: "35.6%" }} />
        </Grid>
        <Grid item>
          <Typography sx={{color: "#FFF"}} variant="subtitle1"><strong>Scenery</strong></Typography>
          <TraitRarity trait={{ type: "Urban", rarity: "27.6%" }} />
          <TraitRarity trait={{ type: "People", rarity: "12.1%" }} />
          <TraitRarity trait={{ type: "Nature", rarity: "12.1%" }} />
          <TraitRarity trait={{ type: "Vehicles", rarity: "46.0%" }} />
          <TraitRarity trait={{ type: "Burned", rarity: "1.7%" }} />
          <TraitRarity trait={{ type: "Unknown", rarity: "1.7%" }} />
        </Grid>
        <Grid item>
          <Typography sx={{color: "#FFF"}} variant="subtitle1"><strong>Number</strong></Typography>
          <TraitRarity trait={{ type: "0-24", rarity: "92.9%" }} />
          <TraitRarity trait={{ type: "25-36", rarity: "5.4%" }} />
          <TraitRarity trait={{ type: "Unknown", rarity: "1.7%" }} />
        </Grid>
        <Grid item>
          <Typography sx={{color: "#FFF"}} variant="subtitle1"><strong>ISO</strong></Typography>
          <TraitRarity trait={{ type: "100", rarity: "20.9%" }} />
          <TraitRarity trait={{ type: "200", rarity: "28.0%" }} />
          <TraitRarity trait={{ type: "400", rarity: "39.2%" }} />
          <TraitRarity trait={{ type: "1000", rarity: "7.1%" }} />
          <TraitRarity trait={{ type: "Unknown", rarity: "4.6%" }} />
        </Grid>
      </Grid>
    );
  };


  return (
    <section id="rarity">
      <Box style={{ paddingTop: "5rem", paddingBottom: "5rem" }}>
        <Typography variant="h5" style={{  marginBottom: "2rem", color: "#FFF"  }}>RARITY &#128142;</Typography>
        <Typography variant="subtitle1" style={{ marginBottom: "3rem" }}>
          Solfilm NFTs have “organic rarity” attributed to the human behind the camera. 
          Our NFTs are not computer generated with specific technical parameters. 
          Each photo captures a unique moment in time and rarity is related to the physical camera setup. 
          These characteristics include the type of film, the number of photos on the strip, 
          the scenery, the photo number on the film roll, and the camera’s sensitivity to light. 
          Our first collection, Solfilm ISO 001, includes 373 photos taken between 1980 and 
          2022 in a variety of environments.
        </Typography>
        {renderGrid()}
        <Typography sx={{fontSize: "0.75rem", opacity: "0.6", marginTop: "0.5rem"}}>* To be updated</Typography>
      </Box>
    </section>
  );
};

export default Rarity;