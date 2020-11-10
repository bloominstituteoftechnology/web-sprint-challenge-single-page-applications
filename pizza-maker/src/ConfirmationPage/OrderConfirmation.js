import React from "react";
import pizza from "./ConfirmPizza.png";
import "./OrderConfirmation.css";
import gif from "./drake pizza.gif";

function OrderConfirmation() {
  return (
    <div className="orderConfirmation">
      <img className="pizza" src={pizza} />
      <img className="gif" src={gif} />
    </div>
  );
}

export default OrderConfirmation;
