import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route, Link } from "react-router-dom";
import Pizza from "./Components/Pizza";
import Form from "./Components/Form";
import schema from "./Components/formSchema";
import "./App.css";

const App = () => {
  const [pizza, setPizza] = useState([]);
  const [post, setPost] = useState(false);

  return (
    <div className="App">
      <Link to="/">
        <div className="home-button">Home</div>
      </Link>
      <h1>Lambda Eats</h1>
      <h2>Pizza Port!</h2>
      <Link to="/pizza">
        <div className="pizza-button">Order</div>
      </Link>

      <Route exact path="/">
        <Pizza pizza={pizza} />
      </Route>
      <Route path="/pizza">
        <Form setPost={setPost} />
      </Route>
    </div>
  );
};
export default App;
