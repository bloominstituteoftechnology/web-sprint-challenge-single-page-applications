import React from "react";
import { NavBar } from './Styled.js';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <React.Fragment>
        <NavBar className='list-unstyled lead d-flex justify-content-around'>
          <NavLink to='/' className=''><b>Home</b></NavLink>
          <NavLink to='/menu' className=''><b>Toppings</b></NavLink>
          <NavLink to='/pizza' className=''><b>Build Your Pizza</b></NavLink>
        </NavBar>
    </React.Fragment>
  );
};

export default Nav;
