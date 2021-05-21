import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <>
        <Link to="/">Home</Link> <br /> <br />
        <Link id="order-pizza" to="/pizza">Order Pizza</Link>
        </>
    )
}

export default Nav;