import React, { useState, useEffect, } from "react";
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar () {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
  
    const handleClick = () => setClick(!click);
    

    return (

      <>
      <nav className='navbar'>
          <div className='navbar-container'>
              <Link to='/' className='navbar-logo'>
                𝕃𝔸𝕄𝔹𝔻𝔸 𝔼𝔸𝕋
              </Link>
              <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links'>
                  Home
              </Link>
              </li>
              <Link to='/help' className='nav-links'>
                  Help
              </Link>
              <li className='nav-item'>
              <Link
                to='/pizza'
                className='nav-links-mobile'
                
              >
                Sign Up
              </Link>
            </li>
              </ul>
          </div>
          
      </nav>
      </>
    )
}

export default Navbar;