import React from "react";

function Pizza({ details }) {
  if (!details) {
    return <h3>Grabbing your fresh pizza&apos;s details...</h3>;
  }

  return (
    <div className="pizza container">
      <h2>{details.name}</h2>
      <p>Size: {details.size}</p>
      <p>Toppings: {details.toppings}</p>
      <p>Special Instructions: {details.instructions}</p>

    </div>
  );
}

export default Pizza;