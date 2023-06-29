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
      window.open('https://mail-attachment.googleusercontent.com/attachment/u/0/?ui=2&ik=2148208f4f&attid=0.1&permmsgid=msg-a:r220445032868864159&th=188fe00c8da2180a&view=att&disp=inline&realattid=f_ljelbb6v0&saddbat=ANGjdJ8Cdc0DnSFiE7ycsul6gJZ3zThcqMWf-FyA9t958aYcTDHXOftRwcPnC_f-SxMyKb1qfyQTItM3dpaLlNXEEZnVzxSp9vYcPNQsUgVIOD8mLp1-ScUJcg8Q7UTn1rqCeEtilH-FMb-MQ3MB5FSQ6cA2w4rof4K5L8-3lNSp38x_V3MPeXTLAfnvlonRmDt4DObYa39moK_Vii13MOCnQGH5Rtf-zztRx69jO_Mi5HIHDXP9wxgJJUmHe-3FkzYbKZKFBWD43aG03KHirnPPy_12AtK65KqfxJ3_cqUsDL5jTIdK0FxqLDwXr4zxUK-GmfCz5MUJqcTLesNa82OtAOq5VW255C9ingx0CnbtnETY8w1ys-WLB7GB4fTl7VXtMxPkXtS6xjTuWYLE12TLcMnXRW77oubdMXKbJ2cGMeaXaCEEHYDqpOYCIJ7wFfD0PirHtzoFaDEwJWtoYCe11a55K-Qft75zggQS3ERGFW-EkrkQPnIKbGCBk4nI2YN4RnP63hh7DX-D1Pz_uxvRSTMX3gksJZu73tdyxZWEANgSH7BOhVkOuYZVhH3BESugZ6Uy18yYkTUgw_9PVLCBzbl_J6GZPNEkid25LvsBhSzUVIohqBu81lZnWDSMw8Ncgr4ZlP7hFoo416riEOwLSZmwTKwUCBYH0KSp6cVh3n-hr-MQ3E-lodjSJDF7BEHnzwIi7Fp_xpWvzIrrY4OCNUJAq4cC2hwzDpDqw9kkCie2nLimgINdHQ8HtORQVy3gOOvpAjpcpa4iZClCj3mxuheD_yeNrmGIabOTUX1A3mXhI09negrrkm8HfQUu9_fPYIQEgFmJ5Oys4BWAUwJa97tuz1mTNFHRKQE58bG5LXIa4qjXdzptGSUA3DkxzZb8R2XZhxX7sKdGDYIwTr1NnQYxbEXE_D-ABqkvJBIO-XWC-Vv2S_XZhPANLcRtFu9md55-yQfm7OYOtrYgwPZam5CrnvvGkTju78X8m3SluQqaMqFwmLZfKJRKauQ')
      setCurrentPage('Home')
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
