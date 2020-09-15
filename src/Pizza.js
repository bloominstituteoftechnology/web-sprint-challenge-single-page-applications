import React, { useState } from 'react'
import FormField from "./FormField";
import { Route, useHistory } from "react-router-dom"
import * as yup from "yup";
import axios from "axios"
import Confirmation from './Confirmation';


const Pizza = () => {
    const pizzaState = {
        name: "",
        pizzasize: "",
        cheese: true,
        sauce: true,
        meat: true,
        veggies: true,
        specialrequest: ""
    };
    const [pizzaOrder, setPizzaOrder] = useState(pizzaState)

    const history = useHistory();

    const validationSchema = yup.object().shape({
        name: yup
            .string("Name must be at least 2 characters")
            .required("Name is a required field")
            .min(2, "Name must be at least 2 characters"),
     });
    

    const pizzaSubmit = e => {
       e.preventDefault();
       history.push('/Confirmation');
       console.log("Pizza Order Submitted")
       axios
        .post("https://reqres.in/api/users", pizzaOrder)
        .then(() => console.log("Order Submitted Working On It"))
        .catch(err => console.log(err, "Pizza Order Not Submitted"));
   };

   const pizzaChange = e => {
       setPizzaOrder({
           ...pizzaOrder,
           [e.target.name]: e.target.value
       });
       console.log(e.target.name)
       console.log(e.target.value)
       if(pizzaOrder.name.length < 2) {
            alert(validationSchema.name)
       }
   }

  

    return (
        <div>
            <h1>Menu</h1>
            <form className="place-order" onSubmit={pizzaSubmit}>
                <div className="name">
                    
                    <FormField 
                        type="text"
                        name="name"
                        label="Name"
                        onChange={pizzaChange}
                        value={pizzaOrder.name}
                        placeholder="Name for order"
                    />
                </div>

                <div className="pizzasize">
                    <label htmlFor="size"></label>
                        <select
                            onChange={pizzaChange}
                            placeholder="Select Size"
                            id="size"
                            name="size">

                                <option value="none">Select Size
                                </option>

                                <option value="small">Small Pizza: 8-10 inches with 6 slices 
                                </option>

                                <option value='Medium'>Medium Pizza: 12 inches with 8 slices.
                                </option>

                                <option value='Large'>Large Pizza: 14 inch with 10 slices.
                                </option>

                                <option value='Extra-Large'>Extra-large Pizza: 16-18 inch with 12 slices.
                                </option>
                        </select>

                <div className="cheese">
                    
                        <FormField 
                            onChange={pizzaChange}
                            name="yes-cheese"
                            label="Cheese"
                            type="checkbox"
                        />
                </div>

                <div className="sauce">
                    
                        <FormField
                        onChange={pizzaChange}
                            name="yes-sauce"
                            label="Robust Marinara Sauce"
                            type="checkbox"
                        />
                </div>

                <div className="meat">
                   
                        <FormField
                        onChange={pizzaChange}
                            name="pepperoni"
                            label="Pepperoni"
                            type="checkbox"
                        />

                   
                        <FormField
                        onChange={pizzaChange}
                            name="bacon"
                            label="Bacon"
                            type="checkbox"
                        />
                   
                        <FormField 
                            onChange={pizzaChange}
                            name="sausage"
                            label="Sausage"
                            type="checkbox"
                        />
                </div>

                <div className="veggies">
                    
                        <FormField 
                            onChange={pizzaChange}
                            name="onion"
                            label="Onions"
                            type="checkbox"
                        />

                    
                        <FormField
                            onChange={pizzaChange}
                            name="pepper"
                            label="Green pepper"
                            type="checkbox"
                        />

                    
                        <FormField
                            onChange={pizzaChange}
                            name="mushrooms"
                            label="mushrooms"
                            type="checkbox"
                        />
                </div>

                <div className="specialrequest">
                        <h1>Special Requests</h1>
                        <FormField
                            onChange={pizzaChange}
                            label=""
                            name="new-request"
                            placeholder="Add request substitutions here"
                            type="text"
                        />
                </div>

                <div className="submit-order">
                    
                    <button
                        onSubmit={pizzaSubmit}>Submit Order</button>
                       
                </div>
                </div>

                <Route path="/Confirmation">
                    <Confirmation />
                </Route>
                
            </form>
        </div>
    )
}

export default Pizza;
