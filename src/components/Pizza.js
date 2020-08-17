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
        peperoni:false,
        sausage:false,
        turtleNeck:false,
        anchovies:false,
        special:""
    }
    //state for button
    const [buttonDisabled, setButtonDisabled] = useState(true)
    const [dummie, setDummie] = useState("none");
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
       
   return( <div className="orderForm">
        <form onSubmit = {formSubmit}>
            <label htmlFor= "name">
                Name For Order:
                <input type = "text" name ="name" value = {formState.name} onChange = {inputChange} data-cy = "name" />
                {errors.name.length > 0 ? <p>{errors.name}</p> : null}
            </label>
            <div>
            <label htmlFor= "size">
                Pizza Size:
                <select name ="size" data-cy = "size">
                    <option value = "Small">Small</option>
                    <option value = "Medium">Medium</option>
                    <option value = "Large">Large</option>
                </select>
            </label>
            </div>
            <div>
            <h2> Choose your Pizza!</h2>
            <li>
            <label htmlFor= "peperoni">
                <input type = "checkbox" checked = {formState.peperoni} value = {formState.peperoni} name ="peperoni" onChange = {inputChange} data-cy = "peperoni" />
                Peporoni
            </label>
            </li>
            <li>
            <label htmlFor= "sausage">
                
                <input type = "checkbox" name ="sausage" checked ={formState.sausage} value ={formState.sausage} onChange = {inputChange} data-cy = "sausage"/>
                Sausage
                </label>
            </li>
            <li>
            <label htmlFor= "turtleNeck">
               
                <input type = "checkbox" name ="turtleNeck" checked = {formState.turtleNeck} value = {formState.turtleNeck} onChange = {inputChange} data-cy = "turtleNeck" />
               Bacon
            </label>
            </li>
            <li>
            <label htmlFor= "anchovies">
               
                <input type = "checkbox" name ="anchovies" checked = {formState.anchovies} value = {formState.anchovies} onChange = {inputChange} data-cy = "anchovies" />
                Vegan
            </label>
            </li>
            
            </div>

            <label htmlFor= "special">
                <p>
                Any special Directions for your order?
                </p>
                <textarea name ="special" value = {formState.special} onChange = {inputChange} data-cy = "special" />
                {errors.special.length > 0 ? <p>{errors.special}</p> : null}
            </label>
            <div>
            <Button disabled = {buttonDisabled} type = "submit" color = "primary" data-cy = "submit" >Submit</Button>
            <pre>Confirmation{JSON.stringify(post, null, 2)}</pre>
            </div>
        </form>
    </div>
   )
}

export default Pizza;