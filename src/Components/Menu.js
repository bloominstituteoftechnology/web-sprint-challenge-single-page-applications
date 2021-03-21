import React from "react";
import { NavBar } from './Styled.js';
import { NavLink } from 'react-router-dom';
import { ToppingsList } from './Styled.js';

const Nav = () => {
  return (
    <React.Fragment>
      <div>
        <ToppingsList>
          <h1 className='text-center mt-4 display-4'>Toppings</h1>
          <li>Cheese</li>
          <li>Pepperoni</li>
          <li>Sausage</li>
          <li>Mushroom</li>
          <li>Onion</li>
        </ToppingsList>
      </div>
    </React.Fragment>
  );
};

export default Nav;
