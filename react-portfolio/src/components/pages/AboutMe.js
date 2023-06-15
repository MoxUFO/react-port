import React from "react";
import '../../styles/AboutMe.css'
import Pic from '../images/taelyn-and-I-250.jpg'

export default function About() {
  return (
    <div className="about-containter">
      <h1 className="about-me">About Me</h1>
      <div className="about" >
      <img className='pic' src={Pic} alt=''></img>
      <p className="about-body">
        Allow me to introduce myself, I'm Nelson Foster Jr. Originally, I
        started my professional journey as a union carpenter, where I honed my
        skills and craftsmanship. However, due to medical reasons, I had to step
        away from carpentry and seek a new path that would challenge my mind. I
        was eager to find a profession that would engage my intellect and allow
        me to grow. Outside of work, I have a deep love for the outdoors and
        often find solace in camping trips, connecting with nature's beauty.
        Additionally, I'm an avid gamer and enjoy immersing myself in the world
        of video games and Dungeons and Dragons. For the past seven years, I've
        been happily married to a wonderful nurse who inspires me every day.
        Currently, we have a lovable pet dog, but my ultimate goal is to have a
        pet octopus someday, as they fascinate me with their intelligence and
        adaptability . With my diverse background and unwavering passion, I am
        ready to embark on new challenges and make a meaningful impact in
        whatever I pursue.
      </p>
      </div>
    </div>
  );
}
