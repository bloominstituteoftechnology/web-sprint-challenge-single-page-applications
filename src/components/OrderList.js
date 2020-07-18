import React from "react";

export default function OrderList(props) {
  return (
    <div className="orders-list">
      {props.orders.map(order => (
        <div className="orders" key={order.id}>
          <h2>{order.name}</h2>
          <p>{order.size}</p>
        </div>
      ))}
    </div>
  );
}