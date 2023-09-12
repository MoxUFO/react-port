import React from 'react';
import '../../styles/Home.css'
import Pic from '../images/taelyn-and-I-250.jpg'

export default function Home() {
  return (
    <div className='home-container'>
      <h1 className='home' >Home Page</h1>
      <div className='intro'>      
        <p className='intro-body'>
        I invite you to explore my portfolio, which highlights my expertise in web development
         and design. It showcases a diverse range of projects, including responsive web designs
         , interactive user interfaces, and innovative solutions. I believe my portfolio offers
        a comprehensive overview of my capabilities. Feel free to browse through and get in 
        touch with me (Links are below!) if you have any questions or if there's a project you'd like to discuss further.
        Thank you for your time, and I look forward to sharing my portfolio with you!
        </p>
      </div>
    </div>
  );
}
