import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Order from "./Order";

function Home(props) {
  return (
    <div className="home">
      <div className="heading">
        <h1>Your favorite food delivered!</h1>

        <Link to="/pizza">
          <button>Order Pizza</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
