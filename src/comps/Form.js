import React, {useState, useEffect} from 'react'
import axios from 'axios'


function Form(props) {
const {change,submit} = props 
const {name,size,agree,agree2,agree3,agree4} = props.values

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
          <input type="checkbox"  value="1" name="topping"checked={agree} onChange={onChange}/> 
          <input type="checkbox" value="2" name="topping" checked={agree2} onChange={onChange}/>
          <input type="checkbox" name="topping" checked={agree3} value="3" onChange={onChange}/>
          <input type="checkbox"  name="topping" checked={agree4} value="4" onChange={onChange}/>
          </label>
          
         


            <br/>

            <label id='special-text'> Special instructions <br/>
                <i>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </i>
            </label><br />
            <input type="submit" value="create a friend"/>
        </form>
    </div>
  )
}


export default Form
