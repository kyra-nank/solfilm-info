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
import { Link } from 'react-router-dom';


const pages = ['About', 'Roadmap', 'Team', 'Rarity', 'Mint'];

const Header = function () {

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <div>
      <AppBar position="static" sx={{
        bgcolor: "#180400"
      }}>
        <Container maxWidth="xl" >

          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            >
              <Link to="/home" style={{ textDecoration: "none", lineHeight: "0" }}>
                <img style={{ height: "50px" }} src="https://d3f9hpbghq9tuf.cloudfront.net/logo-no-paddingX-light.png" alt="logo" />
              </Link>

            </Typography>

            {/* collapsable menu */}
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>

              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                sx={{ color: "#F5DABB" }}
              >
                <MenuIcon />
              </IconButton>

              {/* DROPDOWN / HAMBURGER MENU */}
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                  alignItems: "left"
                }}
              >
                {pages.map((page) => {

                  let navLink;
                  if (window.location.pathname === '/home') {
                    navLink = `#${page.toLowerCase()}`;
                  } else if (window.location.pathname === '/strips') {
                    navLink = `home#${page.toLowerCase()}`;
                  }
                  return (
                    <MenuItem key={page} onClick={handleCloseNavMenu} >
                      <Button
                        style={{ justifyContent: "flex-start" }}
                        sx={{ color: "#180400" }}
                        disableFocusRipple={true}
                        disableRipple={true}
                        href={navLink} >
                        {page}
                      </Button>
                    </MenuItem>
                  );
                }

                )}
                <Link style={{ textDecoration: "none" }} to="/strips"><MenuItem><Button disableRipple disableFocusRipple sx={{ color: "#180400" }} style={{ justifyContent: "flex-start" }}>Strips</Button></MenuItem></Link>

              </Menu>

            </Box>

            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
            >
              <Link to="/home" style={{ textDecoration: "none", lineHeight: "0" }}>
                <img style={{ height: "50px" }} src="https://d3f9hpbghq9tuf.cloudfront.net/logo-no-paddingX-light.png" alt="logo" />
              </Link>
            </Typography>


            {/* HORIZONTAL MENU */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => {
                let navLink;
                if (window.location.pathname === '/home') {
                  navLink = `#${page.toLowerCase()}`;
                } else if (window.location.pathname === '/strips') {
                  navLink = `home#${page.toLowerCase()}`;
                }
                return (
                  <Button
                    key={page}
                    href={navLink}
                    onClick={handleCloseNavMenu}
                    sx={styles.buttonStyle}
                  >
                    {page}
                  </Button>
                );
              }
              )}
              <Link style={{ textDecoration: "none" }} to="/strips"><Button disableRipple disableFocusRipple sx={styles.buttonStyle}>Strips</Button></Link>
            </Box>


            <Box sx={{ flexGrow: 0 }}>
              <SocialLinks isLight={true} />
            </Box>

          </Toolbar>

        </Container>
      </AppBar >
    </div >
  );
};

const styles = {
  buttonStyle: { my: 2, color: '#F5DABB', display: 'block', "&:hover": { color: "#FFF" } }
};

export default Header;
