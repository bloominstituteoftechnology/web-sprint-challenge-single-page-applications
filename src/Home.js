import React from "react";
import { useHistory } from "react-router-dom";

export default function Home() {

  const history = useHistory();

  const routeToPizza = () => {
  
    console.log(history);
    history.push("/pizza");
  };

  return (
    <div className="home-wrapper">
      <img
        className="home-image"
        src="https://source.unsplash.com/F6-U5fGAOik"
        alt=""
      />
      <button onClick={routeToPizza} className="md-button form-button">
        Eat now!
      </button>
    </div>
  );
}