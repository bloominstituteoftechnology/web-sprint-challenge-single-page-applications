import { Link } from 'react-router-dom';
import React from 'react';

const Nav = () => {
  return (
    <div className = "header">
        <div className = "navBar">
            <h1>Lambda Eats</h1>
            <div>
                <Link to="/">Home</Link>
                <a>Rewards Program</a>
                <a>Careers</a>
            </div>
        </div>
    </div>
  );
};

export default Nav;