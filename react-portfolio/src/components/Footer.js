import * as React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import '../styles/Footer.css'


function Footer() {
  
    return (
      <footer className='my-footer'>
        <a href='https://github.com/MoxUFO'><GitHubIcon /></a>
        <a href='https://www.linkedin.com/in/nelson-foster-8281a8279/'> <LinkedInIcon/></a>
        <a href='https://twitter.com/MOX_UFO_'><TwitterIcon /></a>   
      </footer>
      
    )
}

export default Footer