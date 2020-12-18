import React from "react";
import Logo from "./Logo";
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <>
    <nav>
      <Logo />
    
      <Link to="/Home">Home</Link>
      <Link to= '/OrderForm'>Order</Link>
     
      </nav>
    </>
  );
};

export default Nav;
