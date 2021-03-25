import React from "react";

export default function Order(props) {
  const { details } = props;
  if (!details) {
    return <h3>Fetching user data...</h3>;
  }

  return (
    <div className="container">
      <h4>{details.name}</h4>
      <p>
        Size: {details.size} <br></br>
        Cheese: {details.checkCheese ? "Yes" : "No"} <br></br>
        Meat: {details.checkMeat ? "Yes" : "No"} <br></br>
        Vegetables: {details.checkVeg ? "Yes" : "No"} <br></br>
        Mushrooms: {details.checkMush ? "Yes" : "No "} <br></br>
        Special Instructions: {details.specialInst}{" "}
      </p>
    </div>
  );
}
