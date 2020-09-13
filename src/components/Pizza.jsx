import React from "react";
import pizzaForm from "../img/pizza-form.jpg";

export default function Pizza() {
  return (
    <div className="pizza-wrapper">
      <h3>Build Your Own Pizza</h3>
      <img src={pizzaForm} alt="pizza" className="pizzaPic" />
    </div>
  );
}
