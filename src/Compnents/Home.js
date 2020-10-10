import React from "react";
import "../index.css";
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
     <div id='hero'>
        <h2>Your Favorite Food, dellivered while coding</h2>
        <Link to="/pizza">
            <button id='pizzaButt'>Pizza?</button>
        </Link>
     </div>
        
     
    </>
  );
};
export default Home;
