
import React from "react";

export default function PizzaCard(props) {
  const {
    name,
    size,
    pepperoni,
    hawaiian,
    bbq,
    chicken,
    textarea,
  } = props.confirmedOrders;
  return (
    <div>
      <h1> Name:{name}</h1>
      <div>Size:{size} </div>
      <h2>Toppings:</h2>
      <ul>
        <li>Pepperoni:{pepperoni ? "yes" : "no"}</li>
        <li>Hawaiian:{hawaiian ? "yes" : "no"}</li>
        <li>BBQ Meatlovers:{bbq ? "yes" : "no"}</li>
        <li>Chicken:{chicken ? "yes" : "no"}</li>
      </ul>
      <div>
        Special Instructions:
        {textarea === "" ? "no special instructions " : textarea}
      </div>
    </div>
  );
}