import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
    return (
        <nav className="NavBar">
        <Link to ="/">Home</Link>
        <br />
        <Link to = "/components/Form">Order Here</Link>
    </nav>
    )
}

export default Navigation 