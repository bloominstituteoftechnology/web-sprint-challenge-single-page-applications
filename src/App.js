//React dependencies
import React, { useState, useEffect } from "react";
import {
  BrowserRouter,
  Route,
  Link,
  Switch,
  useHistory,
} from "react-router-dom";
import axios from "axios";
import * as yup from "yup";

// Style Imports
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

//Resource Imports

import lambdalogo from "./resources/lambdalogo.png";
import pizzaImage from "./resources/pizza.jpg";
//import apiUrl from "./apiUrl.js";
import schema from "./schema.js";
import Home from "./Home.js";
import wingsNThings from "./wingsNThings.js";
import desserts from "./desserts.js";
import initialFormValues from "./initialFormValues.js";
import initialFormErrors from "./initialFormErrors.js";

/* Pizza Form Below */
/*******************************************************************/

function Pizza(props) 
{const history = useHistory();
  const isDisabled = 'false';
  const [pizza, setPizza] = useState({}); // empty object pizza
  const [formValues, setFormValues] = useState(initialFormValues); // inputs
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disable, setDisabled] = useState(isDisabled);
  
  //Pizza Poster
  const postNew = (newPizza) => {
    axios
      .post("https://reqres.in/api/pizza", newPizza)
      .then((res) => {
        setPizza(res.data);
        console.log("API USAGE SUCCESSFUL ", res.data);
        setFormValues(initialFormValues);
      })
      .catch((err) => {
        console.log("Error: ", err);
        debugger;
      });
  };
  //Form Validator
  const validation = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch((err) => setFormErrors({ ...formErrors, [name]: err.errors[0] }));

    console.log(
      "FORM PASSED VALIDATION... PLEASE AWAIT BIO-SCANNER... PREPARE DNA SAMPLE"
    );
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    console.log("name", name, "value", value, "type", type, "checked", checked);
    const inputValue = type === "checkbox" ? checked : value;
    validation(name, inputValue);
    setFormValues({ ...formValues, [name]: inputValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPizza = {
      name: formValues.name,
      size: formValues.size,
      crushedTomato: formValues.crushedTomato,
      roastedTomato: formValues.roastedTomato,
      truffleCream: formValues.truffleCream,
      confitGarlic: formValues.truffleCream,
      pepperoni: formValues.pepperoni,
      smokedSausage: formValues.smokedSausage,
      prosciutto: formValues.prosciutto,
      chicken: formValues.chicken,
      pulledPork: formValues.pulledPork,
      bacon: formValues.bacon,
      onions: formValues.onions,
      pineapple: formValues.pineapple,
      jalapenos: formValues.jalapenos,
      babySpinach: formValues.babySpinach,
      mushrooms: formValues.mushrooms,
      kabochaSquash: formValues.kabochaSquash,
      specialInstructions: formValues.specialInstructions,
    };

    postNew(newPizza);
    alert(
      "Thank you for placing your order with Lambda Pizza. Our Kitchen is preparing your pizza right now. Your driver will be there shortly. In the meantime, have a wonderful day and thank you again for choosing Lambda Pizza"
    );
    history.push("/");
  };

  // useEffect to change disabled status as the form value changes
  useEffect(() => {
    schema.isValid(formValues).then((valid) => setDisabled(!valid));
  }, [formValues]);

  useEffect(() => {
    console.table("Error: ", formErrors);
  }, [formErrors]);
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
          src={pizzaImage}
          className="sizer"
          alt="another"
          style={{ margin: "5rem" }}
        />
      </div>

      {/* Pizza Form Start */}
      <div>
        <form onSubmit="">
          <div
            className="d-flex container justify-content-center flex-column"
            style={{ backgroundColor: "#aaa" }}
          >
            <h3 style={{ marginBottom: "2rem" }}>Build your pizza: </h3>
            <label htmlFor="nameInput">Name: </label>
            <input
              type="text"
              name="name"
              id="nameInput"
              minLength="2"
              style={{ marginBottom: "2rem" }}
              placeholder="Last Name, First Name"
            />

            {/* Drop Down Menu For Size */}
            <label htmlFor="pizzaSize">
              Choose Your Size: <br /> <em>(required)</em>
            </label>
            <select
              id="pizzaSize"
              style={{ margin: "1.5rem" }}
              onChange={handleChange}
            >
              <option value="">--</option>
              <option value="Small">Small Pizza (12")</option>
              <option value="Medium">Medium Pizza (16")</option>
              <option value="Large">Large Pizza (20")</option>
              <option value="X-large">X-large Pizza (24")</option>
              <option value="Super Bowl">Super Bowl Special (36")</option>
            </select>

            {/*  Radio Buttons For Sauce Choices*/}
            <div
              className="d-flex flex-column justify-content-center choices"
              style={{ margin: "3rem auto" }}
            >
              <h5>
                Choose your sauce <em>(required)</em>
              </h5>
              <label htmlFor="crushedTomato">
                Crushed Makaha Farms Tomatoes
              </label>
              <input
                className="col"
                type="radio"
                name="sauceChoice"
                id="crushedTomato"
                value="Crushed Tomato"
              />

              <label htmlFor="roastedTomatoes">
                Roasted Purple Cherokee Tomato{" "}
              </label>
              <input
                className="col"
                type="radio"
                name="sauceChoice"
                id="roastedTomatoes"
                value="Roasted Tomato"
              />

              <label htmlFor="truffleCream">White Truffle Cream</label>
              <input
                className="col"
                type="radio"
                name="sauceChoice"
                id="truffleCream"
                value="Truffle Cream"
              />

              <label htmlFor="confitGarlic">Confit Baby Garlic Smear</label>
              <input
                className="col"
                type="radio"
                name="sauceChoice"
                id="confitGarlic"
                value="Confit Garlic"
              />
            </div>

            {/* Topping Choice Checkboxes Start Here */}
            <div
              className="container d-flex flex-row justify-content-center choices"
              style={{ marginBottom: "3rem", boxShadow: "none" }}
            >
              <div className="d-flex justify-content-center align-items-center flex-column choices">
                <h5 style={{ textAlign: "center" }}>Choose your meats: </h5>
                <label htmlFor="pepperoni">
                  Pepperoni
                  <input
                    className="col"
                    type="checkbox"
                    name="Pepperoni"
                    id="pepperoni"
                    inputChange={handleChange}
                    formValues={formValues}
                  />
                </label>
                <label htmlFor="smokedSausage">
                  Smoked Sausage
                  <input
                    className="col"
                    type="checkbox"
                    name="Smoked Sausage"
                    id="smokedSausage"
                    inputChange={handleChange}
                    formValues={formValues}
                  />
                </label>
                <label htmlFor="prosciutto">
                  Prosciutto
                  <input
                    className="col"
                    type="checkbox"
                    name="Prosciutto"
                    id="prosciutto"
                    inputChange={handleChange}
                    formValues={formValues}
                  />
                </label>
                <label htmlFor="chicken">
                  Chicken
                  <input
                    className="col"
                    type="checkbox"
                    name="Chicken"
                    id="chicken"
                    inputChange={handleChange}
                    formValues={formValues}
                  />
                </label>
                <label htmlFor="pulledPork">
                  Pulled Pork
                  <input
                    className="col"
                    type="checkbox"
                    name="Pulled Pork"
                    id="pulledPork"
                    inputChange={handleChange}
                    formValues={formValues}
                  />
                </label>
                <label htmlFor="bacon">
                  Bacon
                  <input
                    className="col"
                    type="checkbox"
                    name="bacon"
                    id="bacon"
                    inputChange={handleChange}
                    formValues={formValues}
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
                    inputChange={handleChange}
                    formValues={formValues}
                  />
                </label>
                <label htmlFor="pineapple">
                  Pineapple
                  <input
                    className="col"
                    type="checkbox"
                    name="Pineapple"
                    id="pineapple"
                    inputChange={handleChange}
                    formValues={formValues}
                  />
                </label>
                <label htmlFor="jalapenos">
                  Jalapenos
                  <input
                    className="col"
                    type="checkbox"
                    name="Jalapenos"
                    id="jalapenos"
                    inputChange={handleChange}
                    formValues={formValues}
                  />
                </label>
                <label htmlFor="babySpinach">
                  Baby Spinach
                  <input
                    className="col"
                    type="checkbox"
                    name="Baby Spinach"
                    id="babySpinach"
                    inputChange={handleChange}
                    formValues={formValues}
                  />
                </label>
                <label htmlFor="mushrooms">
                  Mushrooms
                  <input
                    className="col"
                    type="checkbox"
                    name="Mushrooms"
                    id="mushrooms"
                    inputChange={handleChange}
                    formValues={formValues}
                  />
                </label>
                <label htmlFor="kabochaSquash">
                  Kabocha Squash
                  <input
                    className="col"
                    type="checkbox"
                    name="Kabocha Squash"
                    id="kabochaSquash"
                    inputChange={handleChange}
                    formValues={formValues}
                  />
                </label>
              </div>
            </div>

            {/* Special Instructions Text Area Starts Here  */}
            <label htmlFor="specialInstructions: ">
              Please Add Any Special Instructions
            </label>
            <textarea
              type='text'
              name="Special Instructions"
              id="specialInstructions"
              placeholder="i.e. dog at the gate call when here"
              style={{ marginBottom: "3rem" }}
              onChange={handleChange} 
              value={formValues.specialInstructions}
            />
            <div
              className="d-flex justify-content-center"
              style={{ marginBottom: "3rem" }}
            >
              <button className="btn glow-on-hover" id="submitBtn" disable={isDisabled}>Place Your Order</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

// Main App Function Containing Router

export default function App() {
  const [data, setData] = useState();

  const history = useHistory();

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
      <footer>Sprint Project Submission: SPA Tony Miller</footer>
      {/*something that doesn't need to be dependent on router functions?  */}
    </div>
  );
}
