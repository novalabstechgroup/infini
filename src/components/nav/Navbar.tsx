import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import "./Navbar.css";


const pages = ["HOME", "LOGIN", "OWNER", "MORE"];

const Navbar: React.FC = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
   // Add new state for MORE dropdown
   const [moreAnchorEl, setMoreAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  //  Add handlers for MORE dropdown
  const handleMoreClick = (event: React.MouseEvent<HTMLElement>) => {
    setMoreAnchorEl(event.currentTarget);
  };

  const handleMoreClose = () => {
    setMoreAnchorEl(null);
  };

  return (
    <AppBar className="navbar" position="fixed" color="default" elevation={1}>
      <Toolbar className="navbar-toolbar">
        <Typography className="navbar-logo">INFINIT</Typography>

        <div className="mobile-menu">
          <IconButton onClick={handleOpenNavMenu}>
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorElNav}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
          >
            {pages.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Typography>{page}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </div>

        <div className="desktop-menu">
            <Button key="HOME" color="inherit">
              HOME
            </Button>
            <Button key="LOGIN" color="inherit">
              LOGIN
            </Button>
            <Button key="OWNER" color="inherit">
              OWNER
            </Button>
            <Button              
              key="MORE"
              color="inherit"
              onClick={handleMoreClick}
              aria-controls="more-menu"
              aria-haspopup="true">
            MORE
            </Button>
            <Menu
              id="more-menu"
              anchorEl={moreAnchorEl}
              keepMounted
              open={Boolean(moreAnchorEl)}
              onClose={handleMoreClose}
            >
              <MenuItem onClick={handleMoreClose}>My Bookings</MenuItem>
              <MenuItem onClick={handleMoreClose}>About Us</MenuItem>
              <MenuItem onClick={handleMoreClose}>Contact Us</MenuItem>
            </Menu>
        </div>
        
      </Toolbar>
    </AppBar>
  );
};
  
  export default Navbar;