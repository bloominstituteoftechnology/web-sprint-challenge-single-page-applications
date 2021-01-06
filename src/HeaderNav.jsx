import React from 'react';
import { NavLink } from 'react-router-dom';

function HeaderNav() {
  return (
    <div>
      <h1>Lambda Eats</h1>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="#">Help</NavLink>
      </nav>
    </div>
  );
}

export default HeaderNav;
