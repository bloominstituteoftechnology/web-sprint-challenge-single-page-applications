import React from "react";

export default function OrderList(props) {
  const toppingArr = [];
  const toppingTargeter = props.orders.map(order => {
    toppingArr.push(order.toppings);
  });
  const toppingList = toppingArr.join(", ").toUpperCase();

  return (
    <div className="orders-list">
      {props.orders.map(order => (
        <div className="orders" key={order.id}>
          <h2>{order.name}, your order has been received.</h2>
          <h4>Size: {order.size}</h4>
          <h4>Toppings: {toppingList}</h4>
          <h4>Special Instructions: "{order.specialInstructions}" - {order.name}</h4>
        </div>
      ))}
    </div>
  );
}