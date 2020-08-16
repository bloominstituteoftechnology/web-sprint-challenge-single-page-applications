import React from "react";
import { Link } from 'react-router-dom'
import PizzaForm from "./PizzaForm"
// what do we need to add to this component so we can map through items?

function Pizza(props) {
  console.log(props);
  return (
    <div className="items-list-wrapper">
      {/* We made the entire card a Link so that if you click on the img or text
          in the store, we will navigate to that item id's page with the dynamic Link "to" string.*/}
     <Link>
          <PizzaForm />

        </Link>
    </div>
  );
}

export default Pizza;
