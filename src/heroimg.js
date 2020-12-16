import React from 'react';
import Hero from '../src/Assets/'; // Tell webpack this JS file uses this image

function HeroImg() {
  // Import result is the URL of your image
  return <img src={Hero} alt="Hero Image" />;
}

export default HeroImg;