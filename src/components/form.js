import React, {useState, useEffect} from 'react'
import * as yup from 'yup'
import schema from '../validation/formSchema'
import axios from 'axios'
import Order from './order'


//INITIAL VALUES
const initialFormValues={
    //Text inputs
    specialInstructions: '',
    name: '',
    //Radio Buttons
    sauces: '',
    //Checkboxes
    pepperoni: false,
    sausage: false,
    salami: false,
    canadianBacon: false,
    grilledChicken: false,
    onions: false,
    greenBellPeppers: false,
    kalamataOlives: false,
    freshGarlic: false,
    pineapple: false,
    extraCheese: false,
    ketoCrust: false, 
    glutenFreeCrust: false, 

    //Dropdown
      size: '',
  }
  const initialFormErrors = {
      size: '',
      sauces: '',
  }
  const initialOrders = []
  const initialDisabled = true

//FUNTION FOR FORM 
export default function PizzaForm(){

    const [orders, setOrders] = useState(initialOrders)
    const [formValues, setFormValues] = useState(initialFormValues)
    const [formErorrs, setFormErrors] = useState(initialFormErrors)
    const [disabled, setDisabled] = useState(initialDisabled)


    const postNewOrder = newOrder => {
        axios.post('https://reqres.in/')
        .then(response =>{
            setOrders([...orders, response.data])
            setFormValues(initialFormValues)
        })
        .catch(error =>{
            console.log(error)
        })
    }

    const validate = (name, value) => {
        yup
        .reach(schema, name)
        .validate(value)
        .then(valid =>{
            setFormErrors({
                ...formErorrs,[name]:""
            })
        })
        .catch(error =>{
            setFormErrors({
                ...formErorrs,[name]:error.errors[0]
            })
        })
    }

    const inputChange = (name, value) =>{
        validate(name, value)
        setFormValues({
            ...formValues, [name]: value
        })
    }

    const onChange = evt => {
        const {name, value, type, checked} = evt.target
        const valuetoUse = type === 'checkbox' ? checked : value
        inputChange(name, valuetoUse)
    }

    const orderSubmit = () => {
        const newOrder = {
            size: formValues.size,
            sauce: formValues.sauces,
            toppings: ['pepperoni','sausage','salami','canadianBacon','grilledChicken','onions', 'greenBellPeppers','kalamataOlives', 'freshGarlic', 'pineapple','extraCheese'].filter(toppings => formValues[toppings]),
            substitues: ['ketoCrust', 'glutenFreeCrust'].filter(crust => formValues[crust]),
            instructions:formValues.specialInstructions.trim(),
        }
        postNewOrder(newOrder)
        setFormValues(initialFormValues)
    }

    const onSubmit = evt => {
        evt.preventDefault()
        orderSubmit()
    }

    useEffect(()=>{
        schema.isValid(formValues)
        .then(valid =>{
            setDisabled(!valid)
        })
    }, [formValues])


    //FORM STRUCTURE
    return (
        <div className = 'formContainer'>
            <form className = "pizzaForm" onSubmit = {onSubmit}>
                <h1>Build Your Own Pizza</h1>

                <div className = "size">
                <h3>Choose Your Size</h3>
                    <select
                    onChange = {onChange}
                    value = {formValues.size}
                    name='size'
                    >
                        <option value = ''>-Select An Option-</option>
                        <option value = '10"'>10"</option>
                        <option value = '12"'>12"</option>
                        <option value = '14"'>14"</option>
                    </select>
                </div>

                <div className = "sauce">
                <h3>Choose Your Sauce</h3>
                   <label>Original Red
                    <input
                        type="radio"
                        name="sauces"
                        value="originalRed"
                        checked = {formValues.sauces === 'originalRed'}
                        onChange = {onChange}
                    />
                    </label> 
                    <label>Garlic Ranch
                    <input
                        type="radio"
                        name="sauces"
                        value="garlicRanch"
                        checked = {formValues.sauces === 'garlicRanch'}
                        onChange = {onChange}
                    />
                    </label> 
                    <label>BBQ Sauce
                    <input
                        type="radio"
                        name="sauces"
                        value="bbqSauce"
                        checked = {formValues.sauces === 'bbqSauce'}
                        onChange = {onChange}
                    />
                    </label> 
                    <label>White Alfredo Sauce
                    <input
                        type="radio"
                        name="sauces"
                        value="whiteSauce"
                        checked = {formValues.sauces === 'whiteSauce'}
                        onChange = {onChange}
                    />
                    </label> 
                    <label>No Sauce
                    <input
                        type="radio"
                        name="sauces"
                        value="noSauce"
                        checked = {formValues.sauces === 'noSauce'}
                        onChange = {onChange}
                    />
                    </label> 
                </div>

                <div className = "toppings">
                <h3>Add Toppings</h3>
                <label>Pepperoni
                    <input
                    type="checkbox"
                    name="pepperoni"
                    />
                </label>
                <label>Sausage
                    <input
                    type="checkbox"
                    name="sausage"
                    checked = {formValues.sausage}
                    onChange = {onChange}
                    />
                </label>
                <label>Salami
                    <input
                    type="checkbox"
                    name="salami"
                    checked = {formValues.salami}
                    onChange = {onChange}
                    />
                </label>
                <label>Canadian Bacon
                    <input
                    type="checkbox"
                    name="canadianBacon"
                    checked = {formValues.canadianBacon}
                    onChange = {onChange}
                    />
                </label>
                <label>Grilled Chicken
                    <input
                    type="checkbox"
                    name="grilledChicken"
                    checked = {formValues.grilledChicken}
                    onChange = {onChange}
                    />
                </label>
                <label>Onions
                    <input
                    type="checkbox"
                    name="onions"
                    checked = {formValues.onions}
                    onChange = {onChange}
                    />
                </label>
                <label>Green Bell Peppers
                    <input
                    type="checkbox"
                    name="greenBellPeppers"
                    checked = {formValues.greenBellPeppers}
                    onChange = {onChange}
                    />
                </label>
                <label>Kalamata olives
                    <input
                    type="checkbox"
                    name="kalamataOlives"
                    checked = {formValues.kalamataOlives}
                    onChange = {onChange}
                    />
                </label>
                <label>Fresh Garlic
                    <input
                    type="checkbox"
                    name="freshGarlic"
                    checked = {formValues.freshGarlic}
                    onChange = {onChange}
                    />
                </label>
                <label>Pineapple
                    <input
                    type="checkbox"
                    name="pineapple"
                    checked = {formValues.pineapple}
                    onChange = {onChange}
                    />
                </label>
                <label>Extra Cheese
                    <input
                    type="checkbox"
                    name="extraCheese"
                    checked = {formValues.extraCheese}
                    onChange = {onChange}
                    />
                </label>
                </div>

                <div className = "substitutes">
                <h3>Diatary Substitutes</h3>
                <label>Keto Crust
                    <input
                    type="checkbox"
                    name="ketoCrust"
                    checked = {formValues.ketoCrust}
                    onChange = {onChange}
                    />
                </label>
                <label>Gluten Free Crust
                    <input
                    type="checkbox"
                    name="glutenFreeCrust"
                    checked = {formValues.glutenFreeCrust}
                    onChange = {onChange}
                    />
                </label>
                </div>

                <div className = "specialInstructions">
                <h3>Special Instructions</h3>
                <input
                value = {formValues.specialInstructions}
                onChange = {onChange}
                type="text"
                name="specialInstructions"
                />
                </div>

                <div className = "customerName">
                    <h2>Your Name</h2>
                    <input 
                        value = {formValues.name}
                        onChange = {onChange}
                        type = "text"
                        name = "name"
                        />
                </div>


                <div className = "submitOrder">
                    <button disabled = {disabled}>Add to Order</button>
                </div>

                <div className = "errors">
                <div>{formErorrs.size}</div>
                <div>{formErorrs.sauces}</div>
                </div>
            </form>
            {
                orders.map(order => {
                    return (
                        <Order key ={order.id} details = {order}/>
                    )
                })
            }
            
        </div>
    )

}