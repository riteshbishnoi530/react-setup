import React from 'react';
import Header from './components/common/Header';
import About from './components/About';
import Footer from './components/common/Footer';
import Faq from './components/Faq';
import Slick from './components/Slick';
import Swiper from './components/Swiper';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function App() {
  return (
    <>
      <Header/>
      <About/>
      <Footer/>
      <Faq/>
      <Slick/>
      <Swiper/>
    
    </>
  );
}

export default App;
