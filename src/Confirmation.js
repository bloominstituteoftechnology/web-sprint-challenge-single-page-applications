import React from 'react'
import {Link} from 'react-router-dom'

function Confirmation (props) {
const {newOrder} = props
 return (
  <div className='order-confirmation'>
      <Link to='/'>Back Home</Link>
    <h2>Good News, {newOrder.name} we got your order!</h2>
  
    <p>Name: {newOrder.name}</p>
    <p>Phone: {newOrder.phone}</p>
    <p>Size: {newOrder.size}</p>
    <p>Special Instructions: {newOrder.textarea}</p>
  
</div>
)}
export default Confirmation