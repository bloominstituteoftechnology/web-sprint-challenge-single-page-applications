import React, {useState,useEffect} from "react";
import * as yup from "yup";
import axios from "axios";
import { Button } from 'reactstrap';
import Order from './Order.js'
const Pizza = () => {
    //setting post to empty value for info to database
    const [post,setPost] = useState({});
    //creating blank pizza component to compare with validation
    const blankPizza = {
        name: "",
        size:"",
        peperoni:false,
        sausage:false,
        turtleNeck:false,
        anchovies:false,
        special:""
    }
    //state for button
    const [buttonDisabled, setButtonDisabled] = useState(true)
    //blank value for errors
    const [errors,setErrors] = useState({
            name: "",
            size:"",
            peperoni:"",
            sausage:"",
            turtleNeck:"",
            anchovies:"",
            special:""
    });
    //pizza Schema Object
        const pizzaSchema = yup.object().shape({
            name:yup.string().test('len','Must Include a Name for the Order and consist of more than 2 characters', val => val.length > 2),
            size:yup.boolean().oneOf(["Small","Medium","Large"]),
            peperoni: yup.boolean().oneOf([true,false]),
            sausage: yup.boolean().oneOf([true,false]),
            turtleNeck: yup.boolean().oneOf([true,false]),
            anchovies: yup.boolean().oneOf([true,false]),
            special:yup.string()
        })
    //validating Change
    const validateChange = (e) => {
        yup
        .reach(pizzaSchema,e.target.name)
        .validate(e.target.value)
        .then(valid => {
            setErrors({...errors, [e.target.name]: ""})
            console.log('success')
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
                //use effect to make sure person provides a name 
                useEffect(() => {
                    if(formState.name.length < 3){
                       setButtonDisabled(true);
                   }else{setButtonDisabled(false)}
               }, [formState]);
       
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
                <input type = "checkbox" checked = {formState.peperoni} value = {formState.peperoni} name ="peperoni" onChange = {inputChange} data-cy = "peperoni" />
            </label>
            <label htmlFor= "sausage">
                Sausage
                <input type = "checkbox" name ="sausage" checked ={formState.sausage} value ={formState.sausage} onChange = {inputChange} data-cy = "sausage"/>
            </label>
            <label htmlFor= "turtleNeck">
                Turtle neck
                <input type = "checkbox" name ="turtleNeck" checked = {formState.turtleNeck} value = {formState.turtleNeck} onChange = {inputChange} data-cy = "turtleNeck" />
            </label>
            <label htmlFor= "anchovies">
                Anchovies!
                <input type = "checkbox" name ="anchovies" checked = {formState.anchovies} value = {formState.anchovies} onChange = {inputChange} data-cy = "anchovies" />
            </label>
            <label htmlFor= "special">
                Any special Directions for your order?
                <textarea name ="special" value = {formState.special} onChange = {inputChange} data-cy = "special" />
                {errors.special.length > 0 ? <p>{errors.special}</p> : null}
            </label>
            <Button disabled = {buttonDisabled} type = "submit" color = "danger" data-cy = "submit" >Submit</Button>
        </form>
    </div>
   )
}

export default Pizza;