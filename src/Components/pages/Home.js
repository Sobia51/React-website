import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Center from '../Center';
import Navbar from '../Navbar';

function Home() {
  return (
    <>
    <Navbar />
      <HeroSection />
     < Cards />
     <Center/>
    
    </>
  );
}

export default Home;