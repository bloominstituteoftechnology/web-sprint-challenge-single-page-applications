import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom"
import * as yup from 'yup'

//Validation
const schema = yup.object().shape({
  name:yup.string().required('name is required ').min(2, 'Name needs to be more than 2 characters long'),
  //Didn't set up the rest as i have questions about state and dropdowns, and checkboxes
})



const OrderForm = () => {
//Setting state
const [form, setForm] = useState({
  name:'', 
  size:"",
  specialInstructions:'',
  //Didn't add toppings as when I click them, they get added
})


//Disabled for submit
const[disabled, setDisabled] = useState(true)

//Checking validation and setting disabled to false
useEffect(() =>{
  schema.isValid(form).then(valid => setDisabled(!valid))
}, [form])

// OnChange
const change = (e) =>{
 console.log(e.target.value, "input Changed")//Checking to see if everything is here
const {checked, value, name, type} = e.target
const valueToUse = type === "checkbox" ? checked : value
setForm({...form, [name]:valueToUse})
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
        <input type="text" name="name" onChange={change}  value={form.name} placeholder="name"></input>
        </label>
        {/* Size */}
        {/* This is not working correctly in state */}
        <h3>Size</h3>
        <label>Size
          <select onChange={change} value={form.size} id="size"> 
          <option label="Small Size" >Small</option>
          <option label="Medium Size" >Medium</option>
          <option label="Large Size" >Large</option>
          </select>
        </label>
        {/* Topping */}
        <h3>Toppings</h3>
        <label>Cheese
          <input onChange={change} id="cheese" name="cheese" value={form.toppings === 'cheese'} type="checkbox"></input>
        </label>
        <br/>
        <label>Basil
          <input onChange={change} id="basil" name="basil" value={form.toppings === "basil"} type="checkbox"></input>
        </label>
        <br></br>
        <label>Olives
          <input onChange={change} id="olives" name="olives"value={form.toppings === "olives"} type="checkbox"></input>
        </label>
        <br/>
        <label>Mozzarella 
          <input onChange={change} id="mozzarella" name="mozzarella" value={form.toppings === "mozzrella"} type="checkbox"></input>
        </label>
        <br/>
        {/* Instructions */}
        <label>Special Instructions
          <input onChange={change} type="text"  name='specialInstructions' value={form.specialInstructions} placeholder="Extra sauce?"></input>
        </label>
        <br/>
        {/* Confirm */}
        <Link to="/Confirm">
    <button disabled={disabled}>Submit</button></Link>
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