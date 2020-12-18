import React from 'react'
import {Link} from 'react-router-dom'

const Body = () => {
  return (
    <div>
      <div className="body">
      
      <h1>Making People Happy</h1>

      <p>Italian Pizza with Cherry Tomatos and Green Basil</p>
      <Link to="OrderForm"><button> Order Now</button></Link>
      </div>
    </div>
  )
}

export default Body
