import React from "react";
import '../styles.css'
import { Route, Link, Switch, Redirect } from 'react-router-dom'
const Header = () => {


  return (
    <div className='header-wrapper'>
      <h1>Lambda Eats</h1>
      <nav>
        <div className='nav-links'>
          <Link to='/'>Home</Link>
          <Link to='/pizza'>Order Pizza</Link>
        </div>
      </nav>
    </div>
  );
};
export default Header;