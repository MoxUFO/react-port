import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../../styles/Project.css'

export default function Projects({projects}) {


  return (
    <div className='my-projects'>
        {projects.map((project)=> (
 <Card sx={{ maxWidth: 345 , minWidth: 345 , margin: 1 }}>
 <CardMedia
   component="img"
   alt="green iguana"
   height="140"
 
   image="/static/images/cards/contemplative-reptile.jpg"
 />
 <CardContent>
   <Typography gutterBottom variant="h5" component="div">
     {project.title}
   </Typography>
   <Typography variant="body2" color="text.secondary">
   {project.description}
   </Typography>
 </CardContent>
 <CardActions>
   <a href={project.repo}><Button size="small">Live</Button></a>
   <a href={project.live}><Button size="small">Learn More</Button></a>
 </CardActions>
 </Card> 
        ))}
    </div>
  );
}

  
