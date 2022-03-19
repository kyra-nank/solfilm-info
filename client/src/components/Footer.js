import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import SocialLinks from './SocialLinks';


const Footer = () => {

  return (<div>
    <AppBar position="static" elevation={0} sx={{
      bgcolor: "#180400"
    }}>
      <Container maxWidth="xl">

        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'flex', md: 'flex' } }}
          >
            <img style={{ height: "35px" }} src={require("../assets/logo-no-paddingX-light.png")} alt="logo" />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' } }} style={{ justifyContent: "center" }}>
            <Typography
              sx={{ my: 2, color: 'white', display: 'block' }}
            >© Solfilm 2022
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <SocialLinks isLight={true}/>
          </Box>

        </Toolbar>
      </Container>
    </AppBar >
  </div >
  );
};

export default Footer;

