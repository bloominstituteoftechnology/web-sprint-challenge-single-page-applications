import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

function Nav() {
    return (
        <div className="nav-container">
            <Link to="/">
                <button className="nav-btn">Home</button>
            </Link>
            <Link to="/pizza">
                <button className="nav-btn">Order</button>
            </Link>
        </div>
    )
}

export default Nav
