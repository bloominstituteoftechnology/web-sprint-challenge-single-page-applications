import React from 'react'
import {Link} from 'react-router-dom'


export default function Navigation(){
    return(
        <nav>
      <h2>Lambda Eats</h2>
      <button><Link to = '/'>Home</Link></button>
      <button>Help</button>
    </nav>
    )
}