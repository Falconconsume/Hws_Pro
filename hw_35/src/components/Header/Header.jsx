import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import ToggleAction from "../theme/SwitchTheme";

export default function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar sx={{ background: "#2196f3" }} position="static">
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <ToggleAction />

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ fontFamily: "sans-serif", fontWeight: 700, color: "white" }}
            >
              LOGO
            </Typography>
          </Box>

          <Box>
            <IconButton
              aria-label="open navigation menu"
              aria-controls="menu-appbar"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            ></Menu>
          </Box>

          <Box>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu}>
                <Avatar alt="User Avatar" src="/static/images/avatar.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              id="menu-appbar-user"
              anchorEl={anchorElUser}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            ></Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
