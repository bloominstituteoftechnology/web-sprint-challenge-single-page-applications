import React, { useState } from 'react'
import FormField from "./FormField";
import { Route, Link } from "react-router-dom"
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

    const validationSchema = yup.object().shape({
        name: yup
            .string("Name must be at least 2 characters")
            .required("Name is a required field")
            .min(2, "Name must be at least 2 characters"),
     });
    


   const pizzaSubmit = e => {
       e.preventDefault();
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
                            name="yes-cheese"
                            label="Cheese"
                            type="checkbox"
                        />
                </div>

                <div className="sauce">
                    
                        <FormField
                            name="yes-sauce"
                            label="Robust Marinara Sauce"
                            type="checkbox"
                        />
                </div>

                <div className="meat">
                   
                        <FormField
                            name="pepperoni"
                            label="Pepperoni"
                            type="checkbox"
                        />

                   
                        <FormField
                            name="bacon"
                            label="Bacon"
                            type="checkbox"
                        />
                   
                        <FormField 
                            name="sausage"
                            label="Sausage"
                            type="checkbox"
                        />
                </div>

                <div className="veggies">
                    
                        <FormField 
                            name="onion"
                            label="Onions"
                            type="checkbox"
                        />

                    
                        <FormField
                            name="pepper"
                            label="Green pepper"
                            type="checkbox"
                        />

                    
                        <FormField
                            name="mushrooms"
                            label="mushrooms"
                            type="checkbox"
                        />
                </div>

                <div className="specialrequest">
                        <h1>Special Requests</h1>
                        <FormField
                            label=""
                            name="new-request"
                            placeholder="Add request substitutions here"
                            type="text"
                        />
                </div>

                <div className="submit-order">
                    <Link to='/Confirmation' >
                    <button
                        onSubmit={pizzaSubmit}>Submit Order</button>
                        </Link>
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
