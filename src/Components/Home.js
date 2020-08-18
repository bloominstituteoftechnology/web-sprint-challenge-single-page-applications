import React from "react";
import { useHistory } from 'react-router-dom'

function Home() {
  console.log('Home')

  // history from Hook is the same as props.history. You may use either, but you must use the hook when you don't have access to the react router props.
  const history = useHistory();
  return (
    <div className="home-wrapper">
      <img
        className="home-image"
        src="2 - ymPkbHM.gif"
        alt=""
      />
      <video className="home-video" src="http://assets3.thrillist.com/v1/image/2695953/video/desktop.webm"/>
      <div className="lambda-eats-buttons">
      <button className="pizza button" onClick={() => history.push("/buildyourownpizza")}>Pizza?</button>      
      <button className="order button" onClick={() => history.push("/order")}>Order</button>
      
</div>
    </div>
  );
}

export default Home;
