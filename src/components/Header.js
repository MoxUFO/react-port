import * as React from 'react';
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
import '../styles/Header.css'
// import zIndex from '@mui/material/styles/zIndex';


const pages = ['Home', 'About Me', 'Projects', 'Education','Resume'];

function ResponsiveHeader({ handlePageChange }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
 
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar sx={{
      height:' 10%',
    backgroundColor: 'rgb(101, 101, 66)',
    zIndex: '10', 
  
    }} position="static">
      <Container   maxWidth="xl">
        <Toolbar  disableGutters>
          <Typography
            variant="h5"
            noWrap
            component="h5"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              color: '#E5E6E4',
              textDecoration: 'none',
            }}
          >
            Nelson Foster Jr
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="#E5E6E4"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => { 
                  handleCloseNavMenu()
                  return handlePageChange(page)}} >
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 1,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              color: '#E5E6E4',
              textDecoration: 'none',
            }}
          >
            Nelson Foster Jr
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() =>{
                  handleCloseNavMenu()
                  return handlePageChange(page)}}
                sx={{ my: 2, color: '#E5E6E4', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

         
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveHeader;



