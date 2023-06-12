import * as React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import '../styles/Footer.css'


function Footer() {
  
    return (
      <div className='foot-container'>
        <div>
          <h3>Contact Me</h3>
          </div>
        <footer className='my-footer'>
          <a className='footer-icon' href='https://github.com/MoxUFO'><GitHubIcon fontSize='large' /></a>
          <a className='footer-icon' href='https://www.linkedin.com/in/nelson-foster-8281a8279/'> <LinkedInIcon fontSize='large'/></a>
          <a className='footer-icon' href='https://twitter.com/MOX_UFO_'><TwitterIcon fontSize='large'/></a>   
        </footer>
      </div>
      
    )
}

export default Footer