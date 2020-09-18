import React from "react";

const Pizza = ({ pizza }) => {
  return (
    <div>
      {pizza.map((order) => (
        <div key={order.id}>
          <h3>{order.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default Pizza;
