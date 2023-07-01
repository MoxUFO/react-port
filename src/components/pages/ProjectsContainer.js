import React from 'react';
import Projects from './Projects';
import '../../styles/Project.css'
import Rave from '../images/Rave.png'
import BcCon from '../images/BootCamp-Connect.png'
import Raw from '../images/Raw-Blog.png'
import Wether from '../images/wether.png'
import SVG from '../images/SVG.png'


export default function ProjectsContainer() {

  const projectArr= [
    {
      title: "Bootcamp Connect",
      description: "This is a uniqe app where bootcamp students can can create a profile and view peer profile to learn more about them.",
      live: "https://bootcamp-connect-5.herokuapp.com/",
      tools:"HandleBar.js, Bootstrap, JavaScript, Node.js, Express.js, MySQL",
      repo: "https://github.com/Trengland/Bootcamp-Connect",
      img: BcCon
    },
    {
      title: "Rave Reviews",
      description: "This is a cool app that allows you to search for nearby events",
      tools:"HTML, CSS, JavasCript, webAPI ",
      live: "https://moxufo.github.io/Rave-Reviews/",
      repo: "https://github.com/MoxUFO/Rave-Reviews",
      img: Rave
    },
    {
      title: "Yo what's the wheather like",
      description: "A beautiful app that Shows the current and 5 day forcast for any city in U.S. .",
      tools:"HTML, Bootstrap, CSS,JavaScript, OpenWetherAPI",
      live: "https://moxufo.github.io/yo-whats--the-weather-like/",
      repo: "https://github.com/MoxUFO/yo-whats--the-weather-like",
      img: Wether
    },
    {
      title: "Raw Blog",
      description: "This is a chill app that allows for blog post creation and commenting!",
      tools:"HandleBar.js, Bootstrap, JavaScript, Node.js, Express.js, MySQL",
      live: "liveUrl",
      repo: "https://github.com/MoxUFO/Raw_Blog",
      img: Raw
    },
    {
      title: "Coming soon!",
      description: " ",
      tools:"N/A",
      live: "/",
      repo: "/",
      img: SVG
    },
    {
      title: "Coming Soon!",
      description: " ",
      tools:"N/A",
      live: "/",
      repo: "/",
      img: SVG
    }
  ]

  return (
    <div sx={{ flexGrow: 1 }} className='project-container'>
      <h1 className='projects'>Projects</h1>
      < Projects projects={projectArr} />
    </div>
  );
}



      