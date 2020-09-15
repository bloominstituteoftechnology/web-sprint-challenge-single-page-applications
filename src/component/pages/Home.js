import React from 'react';
import HeroSection from '../HeroSection';
import '../../App.css';
import Cards from '../Cards';

function Home () {
    return (
        <>
        <div>
           <HeroSection />
           <Cards />
        </div>
        </>
    );
}

export default Home;