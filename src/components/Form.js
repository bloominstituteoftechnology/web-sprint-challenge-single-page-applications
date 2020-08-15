import React, {useState, useEffect} from 'react';
import * as yup from "yup";
import axios from 'axios';

const Form = (props) => {

    const defaultState = {
        name: "",
        pizzaSize: "",
        pizzaSauce: "",
        pepperoni: false,
        onions: false,
        sausage: false,
        olives: false,
        instructions:"",
    };

    const [formState, setFormState] = useState(defaultState);
    const [errors, setErrors] = useState({ ...defaultState });
    const [buttonDisabled, setButtonDisabled] = useState(true);


    let formSchema = yup.object().shape({
        name: yup.string().required("Please Provide Your Name").min(2),
        pizzaSize: yup.string().required("Please Select Your Size"),
        pizzaSauce: yup.string().required("Must Select Sauce"),
        pepperoni: yup.boolean().optional(),
        sausage: yup.boolean().optional(),
        onions: yup.boolean().optional(),
        olives: yup.boolean().optional(),
        instructions: yup.string().optional()
    })

    useEffect(() => {
        formSchema.isValid(formState).then(valid => setButtonDisabled(!valid));
      }, [formState]);

      const formSubmit = e => {
        e.preventDefault();
        if (formState) {
            props.setOrder([...props.order, {formState}])
        }
        axios
          .post("https://reqres.in/api/users", formState)
          .then(() => console.log("form submitted success"))
          .catch(err => console.log(err));

      };

      const validateChange = e => {
        e.persist();
        yup
          .reach(formSchema, e.target.name)
          .validate(e.target.value)
          .then(() =>
            setErrors({
              ...errors,
              [e.target.name]: ""
            })
          )
          .catch(error =>
            setErrors({
              ...errors,
              [e.target.name]: error.errors[0]
            })
          );
      };


      const inputChange = e => {
        const value =
          e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setFormState({
          ...formState,
          [e.target.name]: value
        });
        validateChange(e);
      };

    return(
        <form onSubmit = {formSubmit}>
            <label htmlForm = 'name'>
                <Input
                    id = 'name'
                    type = 'text'
                    name = 'name'
                    placeHolder = 'Enter name here'
                    onChange = {inputChange}
                    value = {formState.name}
                    errors = {errors}
                />
            </label>
            <br />
            <label htmlForm = 'pizzaSize'>
                Choice of Size 
                <select name = 'pizzaSize' onChange = {inputChange}>
                    <option value = 'personal'>Personal</option>
                    <option value = 'small'>Small</option>
                    <option value = 'Medium'>Medium</option>
                    <option value = 'large'>Large</option>
                </select>
            </label>

            <label htmlForm="pizzaSauce">
                Choice of Sauce
                <select name="pizzaSauce" onChange={inputChange}>
                    <option value="original">Original Red</option>
                    <option value="bbq">BBQ Sauce</option>
                    <option value="garlic">Garlic Ranch</option>
                    <option value="alfredo">Spinach Alfredo</option>
                </select>
            </label>

            <div>
                <h2>Add Toppings</h2>
                <label htmlForm="pepperoni">
                Pepperoni
                <input onChange={inputChange} 
                    name="pepperoni"
                    type="checkbox"
                    value="pepperoni"
                />
            </label>
            <label htmlForm="sausage">
                sausage
                <input onChange={inputChange} 
                    name="sausage"
                    type="checkbox"
                    value="sausage"
                />
            </label>
            <label htmlForm="onions">
                Onions
                    <input onChange={inputChange} 
                    name="onions" 
                    value="onions" 
                    type="checkbox"/>
            </label>
            <label htmlForm="olives">
                Olives
                    <input onChange={inputChange} 
                    name="olives" 
                    value="olives" 
                    type="checkbox"/>
            </label>
            </div>

            <label htmlForm = 'instructions'>
                Special instructions
                <input
                    id = 'instructions'
                    type = 'text'
                    name = 'instructions'
                    placeHolder = 'Incert here'
                    onChange = {inputChange}
                    value = {formState.instructions}
                    />
            </label>
            <br />
            <button disabled = {buttonDisabled}>Submit</button>

        </form>
    )
}

export default Form
