import React from "react";

export default function User(props) {
  const { details } = props;

  if (!details) {
    return <h3>Working fetching your User&apos;s details...</h3>;
  }

  console.log({ details });
  const check = details.checkCheese ? "Yes" : "No";
  console.log(check);
  return (
    <div className="container">
      <h3>{details.name}</h3>
      <p>Size: {details.size}</p>
      <p>Cheese: {details.checkCheese ? "Yes" : "No"} </p>
      <p>Meat: {details.checkMeat ? "Yes" : "No"} </p>
      <p>Vegetable: {details.checkVeg ? "Yes" : "No"} </p>
      <p>Fungus: {details.checkFungus ? "Yes" : "No"} </p>
      <p>Special Instructions: {details.instr}</p>
    </div>
  );
}
