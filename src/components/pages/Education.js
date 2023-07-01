import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import PlumbingIcon from '@mui/icons-material/Plumbing';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import ConstructionIcon from '@mui/icons-material/Construction';
import CarpenterIcon from '@mui/icons-material/Carpenter';
import BuildIcon from '@mui/icons-material/Build';
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import HardwareIcon from '@mui/icons-material/Hardware';
import HandymanIcon from '@mui/icons-material/Handyman';
import BrushIcon from '@mui/icons-material/Brush';
import '../../styles/Education.css'

export default function Education() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className='education'>
      <h1 className='edu'>Education</h1>
      <Accordion sx={{ backgroundColor: '#E5E6E4' }} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{color: 'rgb(34, 65, 92)' ,fontSize:'1.5rem' , width: '33%', flexShrink: 0 }}>The OSU's FullStack BootCamp</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{color: 'rgb(34, 65, 92)'}} >
            I completed The Ohio State University's edX BootCamp, which provided me with comprohensive training and hands-on experience in front-end and back-end web developement.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ backgroundColor: '#E5E6E4' }} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{color: 'rgb(34, 65, 92)' ,paddingBottom: '10px' , fontSize:'1.5rem' ,width: '33%', flexShrink: 0 }}>
            Proficiencies:
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{color: 'rgb(34, 65, 92)'}} >
          <List >
                <ListItem>
                  <ListItemIcon>
                    <CarpenterIcon sx={{color: 'rgb(34, 65, 92)'}}/>
                  </ListItemIcon>
                  <ListItemText
                    primary="HTML"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <BrushIcon sx={{color: 'rgb(34, 65, 92)'}} />
                  </ListItemIcon >
                  <ListItemText
                    primary="CSS"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <BuildIcon sx={{color: 'rgb(34, 65, 92)'}}/>
                  </ListItemIcon>
                  <ListItemText
                    primary="JavaScript"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ConstructionIcon sx={{color: 'rgb(34, 65, 92)'}}/>
                  </ListItemIcon>
                  <ListItemText
                    primary="SQL/NoSQL"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <HandymanIcon sx={{color: 'rgb(34, 65, 92)'}}/>
                  </ListItemIcon>
                  <ListItemText
                    primary="OOP"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <PlumbingIcon sx={{color: 'rgb(34, 65, 92)'}}/>
                  </ListItemIcon>
                  <ListItemText
                    primary="Node.js"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <HardwareIcon sx={{color: 'rgb(34, 65, 92)'}}/>
                  </ListItemIcon>
                  <ListItemText
                    primary="Material UI"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <HomeRepairServiceIcon sx={{color: 'rgb(34, 65, 92)'}}/>
                  </ListItemIcon>
                  <ListItemText
                    primary="P.W.A's"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <SquareFootIcon sx={{color: 'rgb(34, 65, 92)'}}/>
                  </ListItemIcon>
                  <ListItemText
                    primary="React"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ArchitectureIcon sx={{color: 'rgb(34, 65, 92)'}}/>
                  </ListItemIcon>
                  <ListItemText
                    primary="API's"
                  />
                </ListItem>
            </List>
          </Typography>
        </AccordionDetails>
      </Accordion>
      
    </div>
  );
}
