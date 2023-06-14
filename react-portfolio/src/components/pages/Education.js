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
      <h1>Education</h1>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            High School
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            I Graduated in 2012 From Morrison R. Waite High School, located in Toledo, Ohio.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>The Ohio State University's edX BootCamp</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            I completed The Ohio State University's edX BootCamp, which provided me with comprohensive training and hands-on experience in front-end and back-end web developement.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Technology I learned
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <List >
                <ListItem>
                  <ListItemIcon>
                    <CarpenterIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="HTML"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <BrushIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="CSS"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <BuildIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="JavaScript"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ConstructionIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="SQL"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <HandymanIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="NoSQL"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <PlumbingIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Node.js"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <HardwareIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Material UI"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <HomeRepairServiceIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="P.W.A's"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <SquareFootIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="React"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ArchitectureIcon />
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
