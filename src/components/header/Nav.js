import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <>
        <Link to="/">Home</Link> <br /> <br />
        <Link to="/form">Order Grub</Link>
        </>
    )
}

export default Nav;