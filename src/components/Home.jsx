import React from "react";
import { Route, Link } from "react-router-dom";
import Pizza from "./Pizza";
import Cards from "./Cards";

export default function Home(foodData) {
  console.log("This is the Food Data: ", foodData);

  return (
    <div className="home-wrapper">
      <div className="pizza-banner">
        <div className="pizza-banner-content">
          <h1>Your favorite food, delivered while coding</h1>
          <button className="pizza-form">
            <Link to="/pizza">Pizza?</Link>
          </button>
        </div>
      </div>

      <Route path="/pizza">
        <Pizza />
      </Route>

      <div className="cards-wrapper">
        <h3>Food Delivery in Gotham City</h3>
        <Cards props={foodData} />
      </div>
    </div>
  );
}
