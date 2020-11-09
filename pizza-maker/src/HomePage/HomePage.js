import React from "react";
import image from "./pizza.png";
import "./HomePage.css";
import Button from "@material-ui/core/Button";
import { BrowserRouter as Router, Link } from "react-router-dom";
import OrderPage from "../OrderPage/OrderPage";

function HomePage() {
  return (
    <Router>
      <div className="homepage">
        <div className="header">
          <h1>Lambda Pizza</h1>
          <Link to={OrderPage}>
            <Button
              variant="contained"
              style={{ backgroundColor: "white", marginRight: "15px" }}
              component={Link}
              to="../OrderPage/OrderPage"
            >
              Order Now!
            </Button>
          </Link>
        </div>
        <div className="imageContainer">
          <img src={image} />
        </div>
        <div className="body">
          <h2>Fresh Pizza Made To Order</h2>
          <p>
            Here at Lambda we are serious about creating an amazing pizza
            experience worth telling others about. That is why we source only
            the freshest ingredients from local shops and artisans around the
            globe. Here at lambda we believe that everyone deserves a truely
            mouthwatering and fresh pizza.
          </p>
          <Button
            variant="contained"
            style={{ backgroundColor: "#8E1C0C", color: "white" }}
          >
            Order Now!
          </Button>
          <h2>What Makes Us Different</h2>
          <p>
            At Lambda we believe quality of ingredients stands above all. We
            guarentee only the freshest ingredients are used to create every
            pizza. We don't cut a single slice of peperoni or grate any of our
            artisan cheeses until your order is placed. One bite and you will
            see why Lambda Pizza is a cut above the competition.
          </p>
          <Button
            variant="contained"
            style={{ backgroundColor: "#8E1C0C", color: "white" }}
          >
            Order Now!
          </Button>
        </div>
      </div>
    </Router>
  );
}

export default HomePage;
