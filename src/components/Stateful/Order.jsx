import React from 'react'
import {Link} from "react-router-dom"

const OrderForm = () => {
  return (
    <div>
      <h1>Order now!</h1>
      <form>
        <h3>Your Name</h3>
        <label> Name
        <input type="text" placeholder="name"></input>
        </label>
        <h3>Size</h3>
        <label>Size
          <select id="size">
          <option value="small">Small</option>
          <option type="medium">Medium</option>
          <option type="large">Large</option>
          </select>
        </label>
        <h3>Toppings</h3>
        <label>Cheese
          <input id="cheese" name="cheese" type="checkbox"></input>
        </label>
        <br></br>
        <Link to="/Confirm">
    <button>Submit</button></Link>
      </form>
    </div>
  )
}

export default OrderForm
// [x] A name text input field
// - [ ] Validation for name - name must be at least 2 characters
// - [ c] A dropdown for pizza size
// - [ ] A checklist for toppings - at least 4 (hint: name each separately!)
// - [ ] Text input for special instructions
// - [ ] An Add to Order button that submits form and returns a database record of name, size, toppings and special instructions