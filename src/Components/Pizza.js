import React from "react";
import { Link } from 'react-router-dom'
import PizzaForm from "./PizzaForm"
// what do we need to add to this component so we can map through items?

function Pizza(props) {
  console.log(props);
  return (
    <div className="items-list-wrapper">
     <Link>
          <PizzaForm />

        </Link>
    </div>
  );
}

export default Pizza;
