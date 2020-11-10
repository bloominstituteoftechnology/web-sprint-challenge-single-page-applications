import React from "react";
import image from "./pizza.png";
import "./HomePage.css";
import Button from "@material-ui/core/Button";

function HomePage(props) {
  return (
    <div className="homepage">
      <div className="header">
        <h1>Lambda Pizza</h1>
        <Button
          variant="contained"
          style={{ backgroundColor: "white", marginRight: "15px" }}
          onClick={() => {
            props.history.push("/order");
          }}
        >
          Order Now!
        </Button>
      </div>
      <div className="imageContainer">
        <img src={image} />
      </div>
      <div className="body">
        <h2>Fresh Pizza Made To Order</h2>
        <p>
          Here at Lambda we are serious about creating an amazing pizza
          experience worth telling others about. That is why we source only the
          freshest ingredients from local shops and artisans around the globe.
          Here at lambda we believe that everyone deserves a truely
          mouthwatering and fresh pizza.
        </p>
        <Button
          variant="contained"
          style={{ backgroundColor: "#8E1C0C", color: "white" }}
          onClick={() => {
            props.history.push("/order");
          }}
        >
          Order Now!
        </Button>
        <h2>What Makes Us Different</h2>
        <p>
          At Lambda we believe quality of ingredients stands above all. We
          guarentee only the freshest ingredients are used to create every
          pizza. We don't cut a single slice of peperoni or grate any of our
          artisan cheeses until your order is placed. One bite and you will see
          why Lambda Pizza is a cut above the competition.
        </p>
        <Button
          variant="contained"
          style={{ backgroundColor: "#8E1C0C", color: "white" }}
          onClick={() => {
            props.history.push("/order");
          }}
        >
          Order Now!
        </Button>
      </div>
    </div>
  );
}

export default HomePage;
