import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../../styles/Project.css'

export default function Projects({projects}) {


  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid sx={{ paddingInline: '7%' }} container spacing={{ xs: 2, md: 3 }} >
        {projects.map((project, index) => (
          <Card item xs={12} sm={12} md={6} lg={4} xl={4} key={index} sx={{ maxWidth: 345 , minWidth: 300 , margin: 3 }}>
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
      </Grid>
    </Box>
  );
}

  
