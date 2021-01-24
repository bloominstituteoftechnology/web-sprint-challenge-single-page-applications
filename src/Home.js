import React from "react";
import neonpizza from "./resources/neonpizza.jpg";
import inferno from "./resources/inferno.jpg";
import diners from './resources/diners.jpg';
function Home(props) {
  return (
    <div
      className="d-flex justify-content-center flex-column"
      style={{ marginTop: "1rem", textAlign: "center" }}
    >
      <div>
        <h2 style={{ textAlign: "center" }}>
          Home of the World Famous 1200 Degree Inferno Oven
        </h2>
      </div>
      <div className="d-flex flex-column align-items-center" >
        <div>
          <p style={{marginTop: '3rem'}}>
            Founded in 1974 by Luciano Pazzi, Lambda Wood Fired Pizza quickly
            became a mainstay in the Waikiki area serving delicious hand tossed
            pizzas out of it's signature wood fired oven imported directly from
            Naples, Italy.
            <br />{" "}
          </p>
        </div>{" "}
        <div>
          <img
            src={inferno}
            className="sizer"
            alt="another"
            style={{ margin: "5rem auto" }}
          />
        </div>
        <div>
          <br />
          <p>
            We strive to use only the freshest possible ingredients, locally
            sourced when available and always organic. Freshly prepared daily,
            you will surely taste the difference
          </p>
        </div>
      </div>
      <div className="d-flex flex-column" style={{ textAlign: "center" }}>
        <h3 style={{marginTop: '3rem'}}>
          Try our signature <em>Inferno</em> pizza.
        </h3 >
        <h5 style={{ margin: "2.5rem auto" }}>
          Rated #1 pizza in Hawaii by Conde Naste Traveler for 10 consecutive
          years.
        </h5>
        <img src={neonpizza} alt="neon sign" className="image-sizer" />
        <img className='image-sizer2' src={diners} alt="happy diners at Lambda"/>
      </div>
    </div>
  );
}

export default Home;
