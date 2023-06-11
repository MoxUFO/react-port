import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import '../styles/Header.css'
// import NavTabs from "./NavTabs";

function Header({ handlePageChange }) {
  
    return (
      <header className='my-header'>
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
        <Button onClick={() => handlePageChange('Home')}>Home</Button>
        <Button onClick={() => handlePageChange('About')}>About Me</Button>
        <Button onClick={() => handlePageChange('Projects')}>Projects</Button>
        <Button onClick={() => handlePageChange('Education')}>Education</Button>
      </ButtonGroup>
    </Box>
      </header>
      
    )
}

export default Header