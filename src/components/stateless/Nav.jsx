import React from "react";
import Logo from "./Logo";
import {Link, Switch} from 'react-router-dom'

const Nav = () => {
  return (
    <>
      <Logo />
      <Switch>
      <Link to="./Home.jsx">Home</Link>
      <Link to= './OrderForm.jsx'>Order</Link>
      </Switch >
      <h1>Order Now</h1>
      <h1> Confirm </h1>
    </>
  );
};

export default Nav;
