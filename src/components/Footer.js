import * as React from 'react';
import '../styles/Footer.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import TextField from '@mui/material/TextField';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});




function Footer() {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
   let test = document.querySelectorAll('#standard-textarea')
   for (let i = 0; i < test.length; i++) {
    console.log(test[i].value);
    test[i].value = ""
   }
  //  console.log(test);
    setOpen(false);
  };

  
    return (
      <div className='foot-container'>
        <div>
          <h2 className='contact'>Contact Me</h2>
          </div>
        <footer className='my-footer'>
          <a className='footer-icon' href='https://github.com/MoxUFO'><GitHubIcon sx={{color: 'rgb(34, 65, 92)'}} fontSize='large' /></a>
          <a className='footer-icon' href='https://www.linkedin.com/in/nelson-foster-8281a8279/'> <LinkedInIcon sx={{color: 'rgb(34, 65, 92)'}} fontSize='large'/></a>
          <a className='footer-icon' href='https://twitter.com/MOX_UFO_'><TwitterIcon sx={{color: 'rgb(34, 65, 92)'}} fontSize='large'/></a>

        < AddIcCallIcon fontSize='large' onClick={handleClickOpen} sx={{color: 'rgb(34, 65, 92)'}}/>

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        sx={{color: 'rgb(34, 65, 92)'}}
      >
        <DialogTitle sx={{color: 'rgb(34, 65, 92)'}} >{"Thank you for stopping by!"}</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{color: 'rgb(34, 65, 92)'}} id="alert-dialog-slide-description">
          <TextField
          id="standard-textarea"
          label="Name"
          placeholder="Text"
       
          variant="standard"
          fullWidth
        />
          <TextField
          id="standard-textarea"
          label="Email"
          placeholder="Text"
       
          variant="standard"
          fullWidth
        />
          <TextField
          id="standard-textarea"
          label="Message"
          placeholder="Text"
          multiline
          variant="standard"
          fullWidth
        />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
         
          <Button sx={{color: 'rgb(34, 65, 92)'}} onClick={handleClose}>Submit</Button>
        </DialogActions>
      </Dialog>
        </footer>
      </div>
      
    )
}

export default Footer