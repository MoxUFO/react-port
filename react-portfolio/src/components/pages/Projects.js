import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../../styles/Project.css'

export default function Projects({projects}) {
  // console.log(projects);


  return (
    <div className='my-projects'>
        {projects.map((project, index)=> (
 <Card className='proj-card' key={index} sx={{ 
 
  '@media (max-width: 320px)' : {
    minWidth: 300,
    width:300
  },
  '@media (min-width: 321px) and (max-width: 600px)' : {
    minWidth: 300,
    width:345
  },
  '@media (min-width: 601px) and (max-width: 960px)' : {
    minWidth: 400,
    width: 400
  },
  '@media (min-width: 961px) and (max-width: 1280px)': {
    minWidth: 400,
    width: 400
  },
  '@media (min-width: 1281px)': {
    minWidth: 500,
    width: 400
  },
  backgroundColor: '#E5E6E4',
  maxWidth: 345,
  minWidth: 345,
  margin: 3,
   
    }}>
 <CardMedia
   component="img"
   alt="project pohto"
   height="140"
   image={projects.img}
 />
 <CardContent>
   <Typography sx={{color: 'rgb(34, 65, 92)'}}  gutterBottom variant="h5" component="div">
     {project.title}
   </Typography>
   <Typography sx={{color: 'rgb(34, 65, 92)'}} variant="body2" color="text.secondary">
   {project.description}
   </Typography>
 </CardContent>
 <CardActions>
   <a href={project.repo}><Button sx={{color: 'rgb(34, 65, 92)'}} size="small">Live</Button></a>
   <a href={project.live}><Button sx={{color: 'rgb(34, 65, 92)'}} size="small">Learn More</Button></a>
 </CardActions>
 </Card> 
        ))}
    </div>
  );
}

  
