import React, {useState} from 'react'
import {Link} from "react-router-dom"

const OrderForm = () => {
//Setting state

const [form, setForm] = useState({
  name:'',
  size:"",
  toppings:false,
  specialInstructions:'',

})

const change = (e) =>{
 console.log(e.target.value, "input Changed")//Checking to see if everything is here
}

//form
  return (
    <div>
       <h1>Order now!</h1>
      <div className="form">
     
      <form>
        {/* //Name */}
        <h3>Your Name</h3>
        <label> Name
        <input type="text" onChange={change} label="name" placeholder="name"></input>
        </label>
        {/* Size */}
        <h3>Size</h3>
        <label>Size
          <select onChange={change} id="size">
          <option  label="Small Size"value="small">Small</option>
          <option label="Medium Size" value="medium">Medium</option>
          <option label="Large Size" value="large">Large</option>
          </select>
        </label>
        {/* Topping */}
        <h3>Toppings</h3>
        <label>Cheese
          <input onChange={change} id="cheese" name="cheese" value="cheese" type="checkbox"></input>
        </label>
        <br/>
        <label>Basil
          <input onChange={change} id="basil" name="basil" value="basil" type="checkbox"></input>
        </label>
        <br></br>
        <label>Olives
          <input onChange={change} id="olives" name="olives" value="olives" type="checkbox"></input>
        </label>
        <br/>
        <label>Mozzarella 
          <input onChange={change} id="mozzarella" name="mozzarella"value="mozzarella" type="checkbox"></input>
        </label>
        <br/>
        {/* Instructions */}
        <label>Special Instructions
          <input onChange={change} type="text"  name='specialInstructions' placeholder="Extra sauce?"></input>
        </label>
        <br/>
        {/* Confirm */}
        <Link to="/Confirm">
    <button>Submit</button></Link>
      </form>
      </div>
    </div>
  )
}

export default OrderForm
// [x] A name text input field
// - [ ] Validation for name - name must be at least 2 characters
// - [ x] A dropdown for pizza size
// - [ x] A checklist for toppings - at least 4 (hint: name each separately!)
// - [ ] Text input for special instructions
// - [ ] An Add to Order button that submits form and returns a database record of name, size, toppings and special instructions