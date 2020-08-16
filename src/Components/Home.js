import React from "react";
import { useHistory } from 'react-router-dom'

function Home(props) {
  console.log('Home', props)

  // history from Hook is the same as props.history. You may use either, but you must use the hook when you don't have access to the react router props.
  const history = useHistory();
  return (
    <div className="home-wrapper">
      <img
        className="home-image"
        src="https://img.huffingtonpost.com/asset/5aa8034f1e00008e0b7ae8a7.jpeg?cache=UKM6vN10o1&ops=scalefit_720_noupscale"
        alt=""
      />
      <button className="md-button shop-button" onClick={() => history.push("/buildyourownpizza")}>Pizza?</button>
      <button className="md-button2 shop-button2" onClick={() => history.push("/order")}>Order</button>
    </div>
  );
}

export default Home;
