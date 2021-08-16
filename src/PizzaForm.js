import * as yup from 'yup';
import React, {useState} from 'react'
import axios from 'axios'
import PizzaCheckout from './PizzaCheckout'
import Confirmation from './Confirmation'
import {Link} from 'react-router-dom'

const initialOrderValues = {
name: '',
phone:'',
text:'',
size:'',
sausage: false,
onions: false,
greenPeppers: false,
olives: false,
pepperoni: false,
extraCheese: false,
mushrooms: false,
jalepenos: false,
}

const initialOrderErrors = {
    name: '',
    phone:'',
}

function PizzaForm(){
const formSchema = yup.object().shape({
    name: yup.string().required('Please enter your name').min(3, 'Name must be at least 3 characters long'),
    phone: yup.string().required('Must be a valid phone number'),
    size: yup.string().required('Pick a size'),
    sauce: yup.string().required('Pick a sauce'),
    specialInstructions: yup.string(),
    pepperoni:yup.boolean(),
    pineapple:yup.boolean(),
    Olives:yup.boolean(),
    jalepenos:yup.boolean(),
    onions:yup.boolean(),
    extraCheese:yup.boolean(),
    textarea: yup.string(),
})

const [orderValues, setOrderValues]=useState(initialOrderValues)
const [orderErrors, setOrderErrors]=useState(initialOrderErrors)
const [newOrder, setNewOrder] = useState(initialOrderValues)

const postNewOrder = (newOrder) => {
    axios
    .post('https://reqres.in/api/user', newOrder)
    .then((res) => {
//console.log(res.data)
    setNewOrder(newOrder)
    })
    .catch((err) => {
      console.log(err);
    });
}
  const onSubmit = (e) => {
    e.preventDefault();
   postNewOrder(orderValues)
};
  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    const valueToUse = type === "checkbox" ? checked : value;
    inputChange(name, valueToUse);
}; 


const inputChange = (name, value) =>{
    yup.reach(formSchema, name)
        .validate(value)
        .then(() => {
    setOrderErrors({
            ...orderErrors,
            [name]: "",
})})
          .catch((err) => {
    setOrderErrors({
              ...orderErrors,
              [name]: err.errors[0],
})});
    setOrderValues({
        ...orderValues,
        [name]: value, 
});};

//pizza builder

return (<form onSubmit={onSubmit}>
<div className = 'form'>
        <h3>Build Your Pizza</h3>
    <label>
         Name
    <input
        value={orderValues.name}
        onChange={onChange}
        name='name'
        type='text'/>
</label>

    <label>
        Phone Number 
    <input
        value={orderValues.phone}
        onChange={onChange}
        name='phone'
        type='text'/>
</label>

<label>
    <select
     name='size'
     value={orderValues.size}
     onChange={onChange}>
        <option>Pizza Size</option>
        <option value="lrg">Large</option>
        <option value="med">Medium</option>
        <option value="small">Small</option>
</select>
</label>

           
            <h2>Add Toppings</h2>
           

<div className="checks">
    <label> Onions
        <input
            type="checkbox"
            name="onions"   
            checked={orderValues.onions}
            onChange={onChange}/>

</label>
    <label> Jalepenos
        <input
            type="checkbox"
            name="jalepenos"
            checked= {orderValues.jalepenos}
            onChange={onChange} />

</label>
   
    <label> Pepperoni
        <input
            type="checkbox"
            name="pepperoni"
            checked={orderValues.pepperoni}
            onChange={onChange}/>

</label>
    <label> Pineapple
        <input
            type="checkbox"
            name="pineapple"
            checked={orderValues.pineapple}
            onChange={onChange}/>
</label>
    <label> Extra Cheese
        <input
            type="checkbox"
            name="extraCheese"
            checked={orderValues.extraCheese}
            onChange={onChange}/>
</label>
   
    <label>  Olives
        <input
          type="checkbox"
          name="blackOlives"
          checked={orderValues.blackOlives}
          onChange={onChange}/>
</label>
</div>

    <h2>Special Instructions</h2>
         <textarea className='textarea'
            name="textarea"
            value={orderValues.textarea}
            onChange={onChange}
            placeholder=" Additional information" rows ="4" cols="50"/>
<div className="add-to">
 <Link to='/pizza/checkout'></Link>
 {/* <button id="order-pizza" onClick={() => {
     window.location.href = "/Confirmation";
       
         }}>Place Order</button> */}
         <button id="submit-btn" onClick={(evt)=> evt.preventDefault}>Add to order</button>
         
</div>
     <PizzaCheckout newOrder={newOrder} />
</div>
</form>
)}

export default PizzaForm
