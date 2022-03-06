import React from 'react';
import '../styles/styles.css';
import IconButton from '@mui/material/IconButton';


const SocialLinks = function () {
  return (
    <div>
      <IconButton
        size="medium"
        sx={{ "&:hover": { color: "#00C2CB" }, color: "#000" }}
        href="https://discord.com/channels/944766086992236624/944766086992236626"
      >
        <i className="fa-brands fa-discord"></i>
      </IconButton>
      <IconButton
        size="medium"
        sx={{ "&:hover": { color: "#00C2CB" }, color: "#000" }}
        href="https://twitter.com/SolfilmNFT"
      >
        <i className="fa-brands fa-twitter"></i>
      </IconButton>

    </div>
  );
};

export default SocialLinks;