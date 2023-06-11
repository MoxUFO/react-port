import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import '../styles/Header.css'
// import NavTabs from "./NavTabs";

function Header() {
    return (
      <header class='my-header'>
        <h2>Nelson Foster Jr.</h2>
        <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup variant="text" aria-label="text button group">
        <Button>About</Button>
        <Button>Edu</Button>
        <Button>Project</Button>
      </ButtonGroup>
    </Box>
      </header>
      
    )
}

export default Header