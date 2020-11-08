import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <p>Homepage HERE</p>
      <Link to={"/pizza"}>
        <p className="orderPizza">Order Pizza</p>
      </Link>
    </>
  );
};

export default Homepage;
