import React from "react";

const Pizza = (pizza) => {
  return (
    <div className="pizza">
      {/* {props.pizza.map((pizza) => { */}
      {/* <div key={pizza.id}> */}
      <h2>{pizza.name}</h2>
      <p>{pizza.size}</p>
      <p>{pizza.special}</p>
      <p>{pizza.sausage}</p>
      <p>{pizza.spinach}</p>
      <p>{pizza.mushroom}</p>
      <p>{pizza.olive}</p>
      {/* </div> */}
      {/* })} */}
    </div>
  );
};

export default Pizza