import React from "react";
import { Link } from "react-router-dom";

export default function Home() {


  const routeToPizza = () => {
        <Link to={`${url}/pizza`}></Link> 
  };

  return (
    <div className="home-wrapper">
      <img
        className="home-image"
        src="https://source.unsplash.com/F6-U5fGAOik"
        alt=""
      />
      <button onClick={routeToPizza} className="form-button">
        Eat now!
      </button>
    </div>
  );
}