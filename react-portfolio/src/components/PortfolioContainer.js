import React, { useState } from 'react';
import Header from './Header'
import Footer from './Footer'
import Home from './pages/Home';
import About from './pages/AboutMe';
import Projects from './pages/Projects';
import Education from './pages/Education'
// import ContactForm from './pages/ContactForm';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  
  

  // TODO: Add a comment describing the functionality of this method
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    if (currentPage === 'Education') {
          return <Education />;
        }   
  };

  const handlePageChange = (page) => setCurrentPage(page);


  return (
    <div>
      
      < Header currentPage={currentPage} handlePageChange={handlePageChange}  />
      {renderPage()}
      < Footer />
    </div>
  );
}
