import React, {useState, useEffect} from 'react'
import * as yup from 'yup'
import schema from '../validation/formSchema'
import axios from 'axios'


//INITIAL VALUES
const initialFormValues={
    //Text inputs
    specialInstructions: '',
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

    const orderSubmit = () => {
        const newOrder = {
            size: formValues.size,
            sauce: formValues.sauces,
            toppings: ['pepperoni','sausage','salami','canadianBacon','grilledChicken','onions', 'greenBellPeppers','kalamataOlives', 'freshGarlic', 'pineapple','extraCheese'].filter(toppings => formValues[toppings]),
            substitues: ['ketoCrust', 'glutenFreeCrust'].filter(crust => formValues[crust]),
            instructions:formValues.specialInstructions.trim(),
        }
        postNewOrder(newOrder)
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
            <form className = "pizzaForm">
                <h1>Build Your Own Pizza</h1>
                <h3>Choose Your Size</h3>
                    <select
                    name='size'
                    >
                        <option value = ''>-Select An Option-</option>
                        <option value = '10"'>10"</option>
                        <option value = '12"'>12"</option>
                        <option value = '14"'>14"</option>
                    </select>
                <h3>Choose Your Sauce</h3>
                   <label>Original Red
                    <input
                        type="radio"
                        name="sauces"
                        value="originalRed"
                    />
                    </label> 
                    <label>Garlic Ranch
                    <input
                        type="radio"
                        name="sauces"
                        value="garlicRanch"
                    />
                    </label> 
                    <label>BBQ Sauce
                    <input
                        type="radio"
                        name="sauces"
                        value="bbqSauce"
                    />
                    </label> 
                    <label>White Alfredo Sauce
                    <input
                        type="radio"
                        name="sauces"
                        value="whiteSauce"
                    />
                    </label> 
                    <label>No Sauce
                    <input
                        type="radio"
                        name="sauces"
                        value="noSauce"
                    />
                    </label> 
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
                    />
                </label>
                <label>Salami
                    <input
                    type="checkbox"
                    name="salami"
                    />
                </label>
                <label>Canadian Bacon
                    <input
                    type="checkbox"
                    name="canadianBacon"
                    />
                </label>
                <label>Grilled Chicken
                    <input
                    type="checkbox"
                    name="grilledChicken"
                    />
                </label>
                <label>Onions
                    <input
                    type="checkbox"
                    name="onions"
                    />
                </label>
                <label>Green Bell Peppers
                    <input
                    type="checkbox"
                    name="greenBellPeppers"
                    />
                </label>
                <label>Kalamata olives
                    <input
                    type="checkbox"
                    name="kalamataOlives"
                    />
                </label>
                <label>Fresh Garlic
                    <input
                    type="checkbox"
                    name="freshGarlic"
                    />
                </label>
                <label>Pineapple
                    <input
                    type="checkbox"
                    name="pineapple"
                    />
                </label>
                <label>Extra Cheese
                    <input
                    type="checkbox"
                    name="extraCheese"
                    />
                </label>
                
                <h3>Diatary Substitutes</h3>
                <label>Keto Crust
                    <input
                    type="checkbox"
                    name="ketoCrust"
                    />
                </label>
                <label>Gluten Free Crust
                    <input
                    type="checkbox"
                    name="glutenFreeCrust"
                    />
                </label>
                <h3>Special Instructions</h3>
                <input
                type="text"
                name="specialInstructions"
                />
                <div className = "submitOrder">
                    <button>Add to Order</button>
                </div>
            </form>
        </div>
    )

}