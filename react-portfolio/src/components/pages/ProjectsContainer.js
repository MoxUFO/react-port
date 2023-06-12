import React from 'react';
import Projects from './Projects';
import '../../styles/Project.css'

export default function ProjectsContainer() {

  const projectArr= [
    {
      title: "Bootcamp Connect",
      description: "This is a uniqe app where bootcamp students can can create a profile and view peer profile to learn more about them.",
      live: "liveUrl",
      repo: "repoUrl",
      img: "imgLink"
    },
    {
      title: "Rave Reviews",
      description: "This is a cool app that allows you to search for nearby events",
      live: "liveUrl",
      repo: "repoUrl",
      img: "imgLink"
    },
    {
      title: "Yo what's the wheather like",
      description: "A beautiful app that Shows the current and 5 day forcast for any city in U.S. .",
      live: "liveUrl",
      repo: "repoUrl",
      img: "imgLink"
    },
    {
      title: "Raw Blog",
      description: "This is a chill app that allows for blog post creation and commenting!",
      live: "liveUrl",
      repo: "repoUrl",
      img: "imgLink"
    },
    {
      title: "Coming soon!",
      description: " ",
      live: "TBD",
      repo: "TBD",
      img: "imgLink"
    },
    {
      title: "Coming Soon!",
      description: " ",
      live: "TBD",
      repo: "TBD",
      img: "imgLink"
    }
  ]

  return (
    <div className='project-container'>
      <h1>Projects</h1>
      < Projects projects={projectArr} />
    </div>
  );
}



      