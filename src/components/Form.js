import axios from 'axios';
import React, {useState } from 'react';
import * as yup from 'yup';
import pizza from './pizza'
//import pizza from './components/pizza'

const formScheama =yup.object().shape({

    typeOfPizza: yup.string().required(),
    size: yup.string().required().email().required(),
    toppings: yup.string().required(),
    specialInstructions:yup.string().required(),   
})



export default function Form() {

const  [formState, setFormState] =  useState({
   typeOfPizza = '{choice}',
    size:"",
    toppings:"",
    specialInstructions:"" ,
    });

    const  [errors, setErrors] =  useState({
        typeOfPizza = '{choice}',
        size:"",
        toppings:"",
        specialInstructions:"" ,
    })

    const formSubmit = e => {
        e.preventDefault();
        console.log ("Form submitted")
        axios.post("https://reqres.in/api/users", formState)
        .then(response => console.log(response))
        .catch(err => console.log(err));
    }
    const validate  = (e) => {
    yup.reach(formScheama, e.target.name)
        .validate(e.target.value)
        .then(valid =>{
            setErrors({
                ...errors,
                [e.target.name]: ""
            })

        })
        .catch(err => {
            console.log(err.errors)
            setErrors({
                ...errors, 
                [e.target.name]: err.errors[0]
                
            })
        })

    }
const inputChange = e => {
        e.persist()
        
      validate(e)
 
        let value = e.target.type ==="checkbox" ? e.target.checked : e.target.value
         setFormState({ ...formState, [e.target.name]: value });
         
     };
    return(
        
 <form onSubmit={formSubmit}>

        <label htmlFor="typeOfPizza">Crust
            <input 
                value={formState.crust}
                type="dropdown"
            id="typeOfPizza"
            name="typeOfPizza"
            onchange={inputChange}
        />
        </label>
        <label htmlFor="size" >Size
                    <select value= {value.crust} onChange={inputChange}>
                        <option value="">select Crust!</option>
                        <option value="Large">Large</option>
                        <option value="Medium">Medium</option>
                        <option value="Small">Small</option>
                     
                    </select>
           <input onChange={inputChange}/> 
      
   
        </label>
        <label htmlFor="toppings"> Toppings
                    

                    Ham: <input type="checkbox" name="toppings"  value="Ham"/>
                    Beef: <input type="checkbox" name="toppings" value="Beef"/>
                    Salame: <input type="checkbox" name="toppings" value="Salame"/>
                    Pepperoni: <input type="checkbox" name="toppings" value="Pepperoni"/>
                    Italian Sausage: <input type="checkbox" name="toppings"  value="Italian Sausage"/>
                    Premium Chicken: <input type="checkbox" name="toppings" value=" Premium Chicken"/>
                    Bacon: <input type="checkbox" name="toppings" value="Bacon"/>
                    Philly Steak: <input type="checkbox" name="toppings" value="Philly Steak"/>

                                     
                </label>
    <label  htmlFor="specialInstructions">Special Instructions
        <input 
            values={formState.specialInstructions}
            name='specialInstructions'
            type='textarea'
            onChange={inputChange}
        />
    </label>
        <button >Add To Order </button>
</form>
        )
    };