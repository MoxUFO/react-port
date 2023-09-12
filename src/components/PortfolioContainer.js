import React, { useState } from 'react';
import Header from './Header'
import Footer from './Footer'
import Home from './pages/Home';
import About from './pages/AboutMe';
import ProjectsContainer from './pages/ProjectsContainer';
import Education from './pages/Education'
// import ContactForm from './pages/ContactForm';
 import '../styles/PorfolioContainer.css'

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  
  

  // TODO: Add a comment describing the functionality of this method
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About Me') {
      return <About />;
    }
    if (currentPage === 'Projects') {
      return <ProjectsContainer />;
    }
    if (currentPage === 'Education') {
          return <Education />;
        }   
  };

  const handlePageChange = (page) =>{
    if (page === "Resume") {
      window.open('https://1drv.ms/w/s!Au2dQuq0cjMFgT1KhUIOMv0dnX0H?e=AR74Ap')
    } else {
      setCurrentPage(page)
    }
   
  }
   ;


  return (
    <div className='body-div'>
      < Header currentPage={currentPage} handlePageChange={handlePageChange}  />
      {renderPage()}
      < Footer />
    </div>
  );
}
