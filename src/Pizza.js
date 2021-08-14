import React, {useState} from "react";
import "./index.css";
import axios from 'axios'



// reaplce all of these with controled inputs
export default function Pizza(props) {
  //  const { push } = props.history;
  const [name, setName] = useState('');
  const [size, setSize] = useState('');
  const [cheese, setCheese] = useState(false)
  const [sauce, setSauce] = useState(false)
  const [crust, setCrust] = useState(false)
  const [onion, setOnion] = useState(false)
  const [special, setSpecial] = useState('')

  const changeHandler = event => {
    setName(event.target.value)

  } 

  return(
    <div className="order-form">

    <h1>Build Your Own Pizza</h1>

    <div className="form">

    <form onSubmit={evt => {
        evt.preventDefault();
        axios.post('/pizza',{name, size, cheese, crust, sauce, onion, special})
    }}>

       <label>
    Name:
    <input id="name-input" 
    type="text" name="name"  
    onChange={changeHandler}/>
  </label>


<label htmlFor='size-dropdown'> 
         <h3>Choose your Size</h3>
 <select 
 id="size-dropdown" 
 name="size-dropdown" 
 onChange={event => {
setSize(event.target.value)

    } } >
   <option value='small'>Small</option>
   <option value='medium'>Medium</option>
   <option value='large'>Large</option>
 </select>
 </label>
    

   
 <div className="form-check">
   <h3>Choice of Toppings</h3>

          <label>
            <input onChange={event => {
      setCheese(event.target.checked)
} }  
     
              id="extra cheese"
              type="radio"
              name="cheese"
              value="extra cheese"
              checked={cheese}
              className="form-check-input"
            />
           Extra Cheese
    
        

    
            <input onChange={event => {
      setSauce(event.target.checked)

    } }  
            id="extra sauce"
              type="radio"
              name="sauce"
              value="extra sauce"
              checked={sauce}
              className="form-check-input"
            />
            Extra Sauce
         
            </label>

         
            <input onChange={event => {
      setCrust(event.target.checked)

    } }  
            id="extra crust"
              type="radio"
              name="crust"
              value="extra crust"
              checked={crust}
              className="form-check-input"
            />
            Extra Crust
          
        

       
       
           <input onChange={event => {
      setOnion(event.target.checked)

    } }    
            id="extra Onions"
              type="radio"
              name="onion"
              value="extra-onion"
              checked={onion}
              className="form-check-input"
            />
            Extra Onions
        
        </div>

     

        <label>
    Special Instructions:
    <input onChange={event => {
      setSpecial(event.target.value)

    } } id="special-text" type="text" name="special-text" />
  </label>

   <button
          onClick={() => props.history.push("/Confirmation")}
          className="proceedToCheckout"
        >
          Proceed to Checkout
        </button>
    </form>
<br>
</br>


</div>

</div>
    )

}