import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const TraitRarity = function ({ trait }) {

  const [textColor, setTextColor] = useState("#180400");
  const [text, setText] = useState(trait.type);
  const [bgColor, setBgColor] = useState("#F5DABB");

  const handleMouseEnter = function () {
    setText(trait.rarity);
    setBgColor("#FFF");
    // setTextColor("#fff");
  };

  const handleMouseLeave = function () {
    setText(trait.type);
    setBgColor("#F5DABB");
    setTextColor("#180400");
  };

  return (
    <Paper
      elevation={1}
      style={{ backgroundColor: `${bgColor}`, color: `${textColor}`, width: "150px", margin: "5px 0 5px 0" }}
      onMouseEnter={() => { handleMouseEnter(); }}
      onMouseLeave={() => { handleMouseLeave(); }}
    >
      <Typography style={{ padding: "5px" }} align="center" variant="subtitle1">{text}</Typography>
    </Paper>
  );

};

export default TraitRarity;