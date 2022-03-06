import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const TraitRarity = function ({ trait }) {

  const [textColor, setTextColor] = useState("#000");
  const [text, setText] = useState(trait.type);
  const [bgColor, setBgColor] = useState("#D3D3D3");

  const handleMouseEnter = function () {
    setText(trait.rarity);
    setBgColor("#00C2CB");
    setTextColor("#fff");
  };

  const handleMouseLeave = function () {
    setText(trait.type);
    setBgColor("#D3D3D3");
    setTextColor("#000");
  };

  return (
    <Paper
      elevation={1}
      style={{ backgroundColor: `${bgColor}`, color: `${textColor}`, width: "150px", margin: "5px" }}
      onMouseEnter={() => { handleMouseEnter(); }}
      onMouseLeave={() => { handleMouseLeave(); }}
    >
      <Typography style={{ padding: "5px" }} align="center" variant="subtitle1">{text}</Typography>
    </Paper>
  );

};

export default TraitRarity;