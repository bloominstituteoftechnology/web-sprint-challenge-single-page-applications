import React from 'react'
import {Link} from 'react-router-dom'

function Nav(){
    return(
        <nav className = 'NavBar'>
            <Link to ='/'>Home</Link>
            <Link to ='/Form'>Place Order Here</Link>
        </nav>
    )
}

export default Nav