import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import SocialLinks from './SocialLinks';


const Footer = () => {

  return (<div>
    <AppBar position="static" elevation={0} sx={{
      bgcolor: "#fff", mt: "25px"
    }}>
      <Container maxWidth="xl">

        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'flex', md: 'flex' } }}
          >
            <img style={{ height: "35px" }} src={require("../assets/logo-no-paddingX.png")} alt="logo" />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' } }} style={{ justifyContent: "center" }}>
            <Typography
              sx={{ my: 2, color: 'black', display: 'block' }}
            >© Solfilm 2022
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <SocialLinks />
          </Box>

        </Toolbar>
      </Container>
    </AppBar >
  </div >
  );
};

export default Footer;

