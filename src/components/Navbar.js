import React from 'react'
import {Link} from 'react-router-dom'

import  './Navbar.css'

function Navbar() {
    return (
        <header className='main-header'>
            <div className="container">
                <h1>Hell</h1>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/pizzaOrder">CustomPizza</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Navbar
