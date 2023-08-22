import React, {useState, useEffect} from 'react'
import axios from 'axios'


function Form(props) {
const {change,submit} = props 
const {name,size,topping1,topping2,topping3,topping4,specialText} = props.values

const onChange = (event => {
    const {checked,value,name,type} = event.target
    const valueToUse = type === 'checkbox' ? checked : value
  change(name, valueToUse)
    });

    const onSubmit = (e) => {
        e.preventDefault();
        submit();
    }

    


  return (
    <div>
        
        <h1> Bloomtech Eats</h1>
        <form id='pizza-form' onSubmit={onSubmit} >
            <label> Name
            <input 
            type="text"
            id="name-input"
            name="name"
            value={name}
            onChange={onChange}
            />
            </label><br/>

            <label>  Pick your Size
            <select id="size-dropdown" type="" name="size" value={size} onChange={onChange}>
                <option value="0"> -- Select a size--</option>
                <option value="1"> Small</option>
                <option value="2"> Medium</option>
                <option value="3"> Large</option>
                <option value="4"> X-large</option>
            </select><br/>
</label> 
          <h3> Add your toppings </h3>
          <label> Toppings
            <input type="checkbox" />
          <input type="checkbox"   name="topping1"checked={topping1} onChange={onChange}/> 
          <input type="checkbox" name="topping2" checked={topping2} onChange={onChange}/>
          <input type="checkbox" name="topping3" checked={topping3} onChange={onChange}/>
          <input type="checkbox"  name="topping4" checked={topping4} onChange={onChange}/>
          </label>
          
         


            <br/>

            <label id='special-text'> Special instructions <br/>
               <input name="specialText" type="text" value={specialText} onChange={onChange}/>
            </label><br />
            <input type="submit" value="create a friend" onChange={onChange} id="order-button" />
        </form>
    </div>
  )
}


export default Form
