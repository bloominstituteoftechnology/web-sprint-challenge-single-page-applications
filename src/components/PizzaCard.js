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
      
        <p>Pepperoni:{pepperoni ? "yes" : "no"}</p>
        <p>Hawaiian:{hawaiian ? "yes" : "no"}</p>
        <p>BBQ Meatlovers:{bbq ? "yes" : "no"}</p>
        <p>Chicken:{chicken ? "yes" : "no"}</p>
      
      <div>
        Special Instructions:
        {textarea === "" ? "no special instructions " : textarea}
      </div>
    </div>
  );
} 