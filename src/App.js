//React dependencies
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import axios from "axios";

// Style Imports
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

//Resource Imports
import neonpizza from "./resources/neonpizza.jpg";
import inferno from "./resources/inferno.jpg";
import lambdalogo from "./resources/lambdalogo.png";
import chickenwings from "./resources/chickenwings.jpg";
import salad from "./resources/salad.jpg";
import sandwich from "./resources/sandwich.jpg";
import dessert from "./resources/dessert.jpg";
import pizza from "./resources/pizza.jpg";
import apiUrl from "./apiUrl.js";
function Home(props) {
 
  return (
    <div
      className="d-flex justify-content-center flex-column"
      style={{ marginTop: "2rem", textAlign: "center" }}
    >
      <div>
        <h2 style={{ textAlign: "center" }}>
          Home of the World Famous 1200 Degree Inferno Oven
        </h2>
      </div>
      <div className="d-flex flex-row align-items-center">
        <div>
          <p>
            Founded in 1974 by Luciano Pazzi, Lambda Wood Fired Pizza quickly
            became a mainstay in the Waikiki area serving delicious hand tossed
            pizzas out of it's signature wood fired oven imported directly from
            Naples, Italy.
            <br />
            <br />
            We strive to use only the freshest possible ingredients, locally
            sourced when available and always organic. Freshly prepared daily,
            you will surely taste the difference
          </p>
        </div>
        <img
          src={inferno}
          className="sizer"
          alt="another"
          style={{ margin: "5rem" }}
        />
      </div>
      <div className="d-flex flex-column" style={{ textAlign: "center" }}>
        <h3>
          Try our signature <em>Inferno</em> pizza.
        </h3>
        <h5 style={{ marginBottom: "5rem" }}>
          Rated #1 pizza in Hawaii by Conde Naste Traveler for 10 consecutive
          years.
        </h5>
        <img src={neonpizza}  alt='neon sign'/>
      </div>
    </div>
  );
}
function Pizza(props) {
  return (
    <div
      className="d-flex container justify-content-center flex-column"
      style={{ marginTop: "2rem", textAlign: "center" }}
    >
      <div>
        <h1>Build Your Pizza</h1>
      </div>
      <div>
        <h3>Please Make Your Selections Below</h3>
      </div>
      <div>
        <img
          src={pizza}
          className="sizer"
          alt="another"
          style={{ margin: "5rem" }}
        />
      </div>
      <div className="d-flex justify-content-center">
        <form onSubmit="">
          <div className='d-flex container justify-content-center flex-column' style={{ backgroundColor: "#aaa" }}>
            <h3>Build your pizza: </h3>
            <label htmlFor="pizzaSize">Choose Your Size: </label>
            <select id="pizzaSize" style={{ margin: "3rem" }}>
              <option value="">--</option>
              <option value="Small">Small Pizza (12")</option>
              <option value="Medium">Medium Pizza (16")</option>
              <option value="Large Pizza">Large Pizza (20")</option>
              <option value="X-large Pizza">X-large Pizza (24")</option>
              <option value="Super Bowl Special">
                Super Bowl Special (36")
              </option>
            </select>
            <em>(required)</em>
            <div className='d-flex flex-column justify-content-center choices' style={{margin: '3rem auto'}}>
              <h5>
                Choose your sauce <em>(required)</em>
              </h5>
              <label htmlFor="crushedTomato">
                Crushed Makaha Farms Tomatoes
              </label>
              <input
                className="col"
                type="radio"
                name="Crushed Makaha Farms Tomatoes"
                id="crushedTomato"
              />

              <label htmlFor="roastedTomatoes">
                Roasted Purple Cherokee Tomato{" "}
              </label>
              <input
                className="col"
                type="radio"
                name="Pepperoni"
                id="roastedTomatoes"
              />

              <label htmlFor="truffleCream">White Truffle Cream</label>
              <input
                className="col"
                type="radio"
                name="White Truffle Cream"
                id="truffleCream"
              />

              <label htmlFor="confitGarlic">Confit Baby Garlic Smear</label>
              <input
                className="col"
                type="radio"
                name="Confit Baby Garlic Smear"
                id="confitGarlic"
              />
            </div>
            <div className="container d-flex flex-row justify-content-center choices" style={{marginBottom: '3rem'}}>
              <div className="d-flex justify-content-center align-items-center flex-column choices">
                <h5 style={{ textAlign: "center" }}>Choose your meats: </h5>
                <label htmlFor="pepperoni">
                  Pepperoni
                  <input
                    className="col"
                    type="checkbox"
                    name="Pepperoni"
                    id="pepperoni"
                  />
                </label>
                <label htmlFor="smokedSausage">
                  Smoked Sausage
                  <input
                    className="col"
                    type="checkbox"
                    name="Smoked Sausage"
                    id="smokedSausage"
                  />
                </label>
                <label htmlFor="prosciutto">
                  Prosciutto
                  <input
                    className="col"
                    type="checkbox"
                    name="Prosciutto"
                    id="prosciutto"
                  />
                </label>
                <label htmlFor="chicken">
                  Chicken
                  <input
                    className="col"
                    type="checkbox"
                    name="Chicken"
                    id="chicken"
                  />
                </label>
                <label htmlFor="pulledPork">
                  Pulled Pork
                  <input
                    className="col"
                    type="checkbox"
                    name="Pulled Pork"
                    id="pulledPork"
                  />
                </label>
                <label htmlFor="peppers">
                  Peppers
                  <input
                    className="col"
                    type="checkbox"
                    name="Peppers"
                    id="peppers"
                  />
                </label>
              </div>
              <div className="d-flex justify-content-center align-items-center flex-column choices">
                <h5 style={{ textAlign: "center" }}>Choose your veggies: </h5>
                <label htmlFor="onions">
                  Onions
                  <input
                    className="col"
                    type="checkbox"
                    name="Onions"
                    id="onions"
                  />
                </label>
                <label htmlFor="pineapple">
                  Pineapple
                  <input
                    className="col"
                    type="checkbox"
                    name="Pineapple"
                    id="pineapple"
                  />
                </label>
                <label htmlFor="jalapenos">
                  Jalapenos
                  <input
                    className="col"
                    type="checkbox"
                    name="Jalapenos"
                    id="jalapenos"
                  />
                </label>
                <label htmlFor="babySpinach">
                  Baby Spinach
                  <input
                    className="col"
                    type="checkbox"
                    name="Baby Spinach"
                    id="babySpinach"
                  />
                </label>
                <label htmlFor="mushrooms">
                  Mushrooms
                  <input
                    className="col"
                    type="checkbox"
                    name="Mushrooms"
                    id="mushrooms"
                  />
                </label>
                <label htmlFor="kabochaSquash">
                  Kabocha Squash
                  <input
                    className="col"
                    type="checkbox"
                    name="Kabocha Squash"
                    id="kabochaSquash"
                  />
                </label>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
function wingsNThings(props) {
  return (
    <div
      className="d-flex justify-content-center flex-column"
      style={{ marginTop: "2rem", textAlign: "center" }}
    >
      <div>
        <h1 style={{ textAlign: "center" }}>Wings N' Things</h1>
      </div>
      <div>
        <h3 style={{ textAlign: "center" }}>
          Try some of our tasty, wings, sandwiches, and salads
        </h3>
      </div>
      <div>
        <img
          src={chickenwings}
          className="sizer"
          alt="chicken wings"
          style={{ margin: "1rem" }}
        />
        <img
          src={salad}
          className="sizer"
          alt="chicken wings"
          style={{ margin: "1rem" }}
        />
        <img
          src={sandwich}
          className="sizer"
          alt="chicken wings"
          style={{ margin: "1rem" }}
        />
      </div>
    </div>
  );
}
function desserts(props) {
  return (
    <div
      className="d-flex justify-content-center flex-column"
      style={{ marginTop: "2rem", textAlign: "center" }}
    >
      <h1 style={{ textAlign: "center" }}>House Made Desserts</h1>
      <h3 style={{ textAlign: "center" }}>
        Sample our Fantastic Dessert Selection
      </h3>
      <img
        src={dessert}
        className="sizer"
        alt="one"
        style={{ margin: "5rem auto" }}
      />
    </div>
  );
}

export default function App() {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((res) => {
        setData(res.data);
        console.log(data)
        console.log("This API request has PASSED", res.data);
      })
      .catch((err) => console.log("API request has failed", err));
  }, );

  return (
    <div className="container d-flex flex-column justify-content-center">
      <div className="shadow container">
        <div className="head d-flex flex-row align-items-center justify-content-around">
          <h1 className="display-4">Lambda Wood Fired Pizza</h1>
          <img src={lambdalogo} alt="lambda logo"></img>
        </div>
      </div>
      <div className="container">
        <BrowserRouter>
          <div className="container">
            <div
              className="d-flex flex-row"
              style={{ marginTop: "2rem", marginBottom: "3rem" }}
            >
              <Link
                to="/"
                className=" btn glow-on-hover"
                style={{ color: "#666", margin: "1rem" }}
              >
                Home
              </Link>
              <Link
                to="pizza"
                className="btn glow-on-hover"
                style={{ color: "#666", margin: "1rem" }}
              >
                Pizza
              </Link>
              <Link
                to="wings-n-things"
                className="btn glow-on-hover"
                style={{ color: "#666", margin: "1rem" }}
              >
                Wings N' Things
              </Link>
              <Link
                to="desserts"
                className="btn glow-on-hover"
                style={{ color: "#666", margin: "1rem" }}
              >
                Desserts
              </Link>
            </div>
          </div>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/pizza" component={Pizza} />
            <Route path="/wings-n-things" component={wingsNThings} />
            <Route path="/desserts" component={desserts} />
          </Switch>
        </BrowserRouter>
      </div>
      {/*Why would we want code outside of browser router */}
      <footer>copyright 2020 Tony Miller</footer>
      {/*something that doesn't need to be dependent on router functions?  */}
    </div>
  );
}
