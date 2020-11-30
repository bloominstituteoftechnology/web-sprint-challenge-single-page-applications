import React from "react";
import { Link } from "react-router-dom";

function Success(props) {
  return props.order[0] ? (
    <div>
      <h1>Your Order Has Been Placed Successfully!</h1>
      <h2>Below Is The Info On Your Order</h2>
      <div>
        <p>
          <strong>Name: </strong>
          {props.order[0].name}
        </p>
        <p>
          <strong>Sauce: </strong>
          {props.order[0].sauce}
        </p>
        {props.order[0].glutenFree ? (
          <p>
            <strong>Gluten Free!</strong>
          </p>
        ) : null}
        <p>
          <strong>How Many Pizzas: </strong> {props.order[0].amountOfItems}
        </p>
        {props.order[0].toppings.length > 0 ? (
          <p>
            <strong>Toppings: </strong>
            {props.order[0].toppings.map((top) => (
              <span key={top}> {top}</span>
            ))}
          </p>
        ) : (
          <p>No Toppings</p>
        )}
        {props.order[0].specialInstructions.length > 0 ? (
          <p>
            <strong>Special Instructions: </strong>
            {props.order[0].specialInstructions}
          </p>
        ) : null}
        <p>
          <strong>Order Created At: </strong>
          {props.order[0].createdAt}
        </p>
      </div>
    </div>
  ) : (
    <Link to='/pizza'>Please place your order</Link>
  );
}

export default Success;
