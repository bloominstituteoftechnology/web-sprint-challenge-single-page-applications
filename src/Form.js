import React, {useState} from 'react'
import axios from 'axios'
import Pizza from './Pizza'
import Schema from './Schema'
import * as yup from 'yup'

const initialFormValues = {
    name: '',
    email: '',
    phone: '',
    textarea:'',
    size: '',
    sauce: '',
    pepperoni: false,
    onions: false,
    jalepenos: false,
    blackOlives: false,
    greenPeppers: false,
    extraCheese: false,
    mushrooms: false,
    pineapple: false,
}

const initialFormErrors={
    name: '',
    email: '',
    textarea: '',
    phone: '',

}
function Form() {
const [formValues, setFormValues]=useState(initialFormValues)
const [formErrors, setFormErrors]=useState(initialFormErrors)
const [newOrder, setNewOrder] = useState(initialFormValues)

    const postNewOrder = (newOrder) => {
        axios
        .post('https://reqres.in/api/user', newOrder)
        .then((res) => {
            // console.log(res.data)
        setNewOrder(newOrder)
        })
        .catch((err) => {
          console.log(err);
        });
    }

      const onSubmit = (evt) => {
        evt.preventDefault();
       postNewOrder(formValues)
    };

      const onChange = (evt) => {
        const { name, value, type, checked } = evt.target;
        const valueToUse = type === "checkbox" ? checked : value;
        inputChange(name, valueToUse);
    }; 

    const inputChange = (name, value) =>{
        yup
            .reach(Schema, name)
            .validate(value)
            .then(() => {
              setFormErrors({
                ...formErrors,
                [name]: "",
              })})
              .catch((err) => {
                setFormErrors({
                  ...formErrors,
                  [name]: err.errors[0],
                })});
           setFormValues({
            ...formValues,
            [name]: value, 
          });
        };


    return (
        <form onSubmit={onSubmit}>
        <div className="form">
                <h5>Build Your Pizza</h5>
                <label>
                Name
                <input
                value={formValues.name}
                onChange={onChange}
                name='name'
                type='text'
                />
            </label>
            <label>
                 Email 
                <input
                value={formValues.email}
                onChange={onChange}
                name='email'
                type='email'
                />
            </label>
            <label>
                Phone Number 
                <input
                value={formValues.phone}
                onChange={onChange}
                name='phone'
                type='text'
                />
            </label>

            <label>
                    <select
                    name='size'
                value={formValues.size}
                onChange={onChange}>
                 <option>----Must select a size----</option>
                <option value="xl">Extra Large</option> 
                <option value="lg">Large</option>
                <option value="med">Medium</option>
                <option value="small">Small</option>
            </select>
            </label>

            <h2>Choice of Sauce</h2>
            <h4>Required</h4>
            <label>
            Red Sauce
            <input
            type="radio"
            name="sauce"
            value="red"
            checked={formValues.sauce === "red"}
            onChange={onChange}
          />
        </label>
        <label>
        Garlic Ranch
          <input
            type="radio"
            name="sauce"
            value="gr"
            checked={formValues.sauce === "gr"}
            onChange={onChange}
          />
        </label>
        <label>
        Bbq Sauce
          <input
            type="radio"
            name="sauce"
            value="bbq"
            checked={formValues.sauce === "bbq"}
            onChange={onChange}
          />
        </label>
        <label>
          Spinach Alfredo
          <input
            type="radio"
            name="sauce"
            value="sa"
            checked={formValues.sauce === "sa"}
            onChange={onChange}
          />
            </label>

            <h2>Add Toppings</h2>
                <h4>Choose up to 6</h4>
                <div className="checks">
            <label> Onions
                <input
                    type="checkbox"
                    name="onions"
                    checked={formValues.onions}
                    onChange={onChange}
                />

            </label>
            <label> Jalepenos
                <input
                    type="checkbox"
                    name="jalepenos"
                    checked={formValues.jalepenos}
                    onChange={onChange}
                />

            </label>
            <label> Mushrooms
                <input
                    type="checkbox"
                    name="mushrooms"
                    checked={formValues.mushrooms}
                    onChange={onChange}
                />

            </label>
            <label> Pepperoni
                <input
                    type="checkbox"
                    name="pepperoni"
                    checked={formValues.pepperoni}
                    onChange={onChange}
                />

            </label>
            <label> Pineapple
                <input
                    type="checkbox"
                    name="pineapple"
                    checked={formValues.pineapple}
                    onChange={onChange}
                />
            </label>
            <label> Extra Cheese
                <input
                    type="checkbox"
                    name="extraCheese"
                    checked={formValues.extraCheese}
                    onChange={onChange}
                />
            </label>
            <label> Green Peppers
                <input
                    type="checkbox"
                    name="greenPeppers"
                    checked={formValues.greenPeppers}
                    onChange={onChange}
                />
            </label>
            <label> Black Olives
                <input
                    type="checkbox"
                    name="blackOlives"
                    checked={formValues.blackOlives}
                    onChange={onChange}
                />
            </label>
       </div>

        <h2>Special Instructions</h2>
                <textarea 
                    name="textarea"
                    value={formValues.textarea}
                    onChange={onChange}
                    placeholder=" Anything else you'd like to add?" rows ="4" cols="50"
            />
                <div className="add-to">

                    <button id="submit-btn" onClick={(evt)=> evt.preventDefault}>Add to order</button>
                </div>
                <Pizza newOrder={newOrder} />
            </div>
   </form>

    )
}

export default Form