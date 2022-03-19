import React from 'react';
import '../styles/styles.css';
import IconButton from '@mui/material/IconButton';


const SocialLinks = function ({isLight}) {

  let mainColor;

  if (isLight) {
    mainColor = "#F5DABB"
  } else {
    mainColor = "#180400"
  }

  return (
    <div>
      <IconButton
        size="medium"
        sx={{ "&:hover": { color: "#FFF" }, color: mainColor }}
        href="https://discord.com/channels/944766086992236624/944766086992236626"
      >
        <i className="fa-brands fa-discord"></i>
      </IconButton>
      
      <IconButton
        size="medium"
        sx={{ "&:hover": { color: "#FFF" }, color: mainColor }}
        href="https://twitter.com/SolfilmNFT"
      >
        <i className="fa-brands fa-twitter"></i>
      </IconButton>

      <IconButton
        sx={{ "&:hover": { color: "#FFF" }, color: mainColor, fontSize: "1.65rem" }}
        href="https://www.instagram.com/solfilm.nft/"
      >
        <i className="fa-brands fa-instagram"></i>
      </IconButton>

    </div>
  );
};

export default SocialLinks;