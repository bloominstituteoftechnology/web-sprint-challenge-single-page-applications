import React, { useState } from 'react'
import FormField from "./FormField";
import { Form } from "reactstrap"
import { useHistory } from "react-router-dom"
import * as yup from "yup";
import axios from "axios"



const Pizza = (props) => {
    
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
       history.push('/Confirmation'
       );
       alert(
           `Yay Your Order Has Been Placed for ${pizzaOrder.name}!`
           
       )
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
   }

   

   const validatename = (e) => {
    setPizzaOrder({
        ...pizzaOrder,
        [e.target.name]: e.target.value
        });
       if(pizzaOrder.name.length < 2) {
        alert(validationSchema,"Name must be at least 2")
        } else {
            alert("Thank you for choosing Lambda Eats")
        }
        
   }

  

    return (
        <div>
            <Form className="place-order" onSubmit={pizzaSubmit} style={{backgroundColor: "#d62828", height: "680px", display: "flex", flexFlow: "column", alignItems: "center" }}>
                <h1 style={{marginTop: "1%"}}> Pizza Menu</h1>
                <div className="name" style={{marginBottom: "2%"}}>
                    
                    <FormField 
                        
                        type="text"
                        name="name"
                        label=""
                        onChange={validatename}
                        value={pizzaOrder.name}
                        placeholder="Name for order"
                    />
                </div>

                <div className="pizzasize">
                    <label htmlFor="size"></label>
                        <select
                            onChange={pizzaChange}
                            value={pizzaOrder.pizzasize}
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
                            value={pizzaOrder.cheese}
                            onChange={pizzaChange}
                            name="yes-cheese"
                            label="Cheese"
                            type="checkbox"
                        />
                </div>

                <div className="sauce">
                    
                        <FormField
                            value={pizzaOrder.sauce}
                            onChange={pizzaChange}
                            name="yes-sauce"
                            label="Robust Marinara Sauce"
                            type="checkbox"
                        />
                </div>

                <div className="meat">
                   
                        <FormField
                            value={pizzaOrder.meat}
                            onChange={pizzaChange}
                            name="pepperoni"
                            label="Pepperoni"
                            type="checkbox"
                        />

                   
                        <FormField
                            value={pizzaOrder.meat}
                            onChange={pizzaChange}
                            name="bacon"
                            label="Bacon"
                            type="checkbox"
                        />
                   
                        <FormField 
                            value={pizzaOrder.meat}
                            onChange={pizzaChange}
                            name="sausage"
                            label="Sausage"
                            type="checkbox"
                        />
                </div>

                <div className="veggies">
                    
                        <FormField
                            value={pizzaOrder.veggies} 
                            onChange={pizzaChange}
                            name="onion"
                            label="Onions"
                            type="checkbox"
                        />

                    
                        <FormField
                            value={pizzaOrder.veggies}
                            onChange={pizzaChange}
                            name="pepper"
                            label="Green pepper"
                            type="checkbox"
                        />

                    
                        <FormField
                            value={pizzaOrder.veggies}
                            onChange={pizzaChange}
                            name="mushrooms"
                            label="mushrooms"
                            type="checkbox"
                        />
                </div>

                <div className="specialrequest">
                        <h1>Special Requests</h1>
                        <FormField
                            value={pizzaOrder.specialrequest.pizzaChange}
                            onChange={pizzaChange}
                            label=""
                            name="newrequest"
                            placeholder="Add request substitutions here"
                            type="text"
                        />
                </div>

                <div className="submit-order">
                    
                    <button
                        onSubmit={pizzaSubmit}>Submit Order</button>
                       
                </div>
                </div>

               
                
            </Form>
            
        </div>
    )
}

export default Pizza;
