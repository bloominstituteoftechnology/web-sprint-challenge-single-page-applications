import React, {useState,useEffect} from "react";
import * as yup from "yup";
import axios from "axios";
import { Button } from 'reactstrap';
const Pizza = () => {
    //setting post to empty value for info to database
    const [post,setPost] = useState({});
    //creating blank pizza component to compare with validation
    const blankPizza = {
        name: "",
        size:"",
        peperoni:"",
        sausage:"",
        turtleNeck:"",
        anchovies:"",
        special:""
    }
    //blank value for errors
    const [errors,setErrors] = useState(blankPizza);
    //pizza Schema Object
        const pizzaSchema = yup.object().shape({
            name:yup.string().test('len','Must Include a Name for the Order and consist of more than 2 characters', val => val.length > 2),
            size:yup.boolean().oneOf(["Small","Medium","Large"]),
            peperoni:yup.boolean(),
            sausage:yup.boolean(),
            turtleNeck:yup.boolean(),
            anchovies:yup.boolean(),
            special:yup.string().required("name Must be added and Consist of 2 or more Characters")
        })
    //validating Change
    const validateChange = e => {
        yup
        .reach(pizzaSchema,e.target.name)
        .validate(e.target.value)
        .then(valid => {
            setErrors({...errors, [e.target.name]: ""})
        })
        .catch(err => {
            console.log("error:",err);
            setErrors({...errors,[e.target.name]:err.errors[0] })
        })

    }
    //database of post 
        const data = [];
    //forms current state
        const [formState,setForm] = useState(blankPizza);
    //on Change Function
        const inputChange = e => {
            e.persist();
            const newFormData = {
                ...formState, [e.target.name] : e.target.type === "checkbox" ? e.target.checked : e.target.value
            }
            validateChange(e);
            setForm(newFormData);
        }
    //submit function
        const formSubmit = e => {
            e.preventDefault();
            axios.post("https://reqres.in/api/users",formState)
                .then(response => {
                    setPost(response.data);
                    data.push(post);
                    setForm(blankPizza);
                })
                .catch(err => {
                    console.log(err);
                });
        }
   return( <div>
        <form onSubmit = {formSubmit}>
            <label htmlFor= "name">
                Name For Order:
                <input type = "text" name ="name" value = {formState.name} onChange = {inputChange} data-cy = "name" />
                {errors.name.length > 0 ? <p>{errors.name}</p> : null}
            </label>
            <label htmlFor= "size">
                Pizza Size:
                <select name ="size" data-cy = "size">
                    <option value = "Small">Small</option>
                    <option value = "Medium">Medium</option>
                    <option value = "Large">Large</option>
                </select>
            </label>
            <h2>Select Toppings!</h2>
            <label htmlFor= "peperoni">
                Peporoni
                <input type = "checkbox" checked = {formState.peperoni} name ="peperoni" onChange = {inputChange} data-cy = "peperoni" />
            </label>
            <label htmlFor= "sausage">
                Sausage
                <input type = "checkbox" name ="sausage" checked ={formState.sausage} onChange = {inputChange} data-cy = "sausage"/>
            </label>
            <label htmlFor= "turtleNeck">
                Turtle neck
                <input type = "checkbox" name ="turtleNeck" checked = {formState.turtleNeck} onChange = {inputChange} data-cy = "turtleNeck" />
            </label>
            <label htmlFor= "anchovies">
                Anchovies!
                <input type = "checkbox" name ="anchovies" checked = {formState.anchovies} onChange = {inputChange} data-cy = "anchovies" />
            </label>
            <label htmlFor= "special">
                Any special Directions for your order?
                <textarea name ="special" value = {formState.special} onChange = {inputChange} data-cy = "special" />
                {errors.special.length > 0 ? <p>{errors.special}</p> : null}
            </label>
            <Button type = "submit" color = "danger" data-cy = "submit" >Submit</Button>
        </form>
    </div>
   )
}

export default Pizza;