import React, {useState, useEffect} from 'react';
import * as yup from "yup";
import axios from 'axios';

const Form = (props) => {

    const defaultState = {
        name: "",
        size: "",
        pizzaSauce: "",
        pepperoni: false,
        garlic: false,
        sausage: false,
        chicken: false,
        instructions: "",
    };
    const [fromState, setFromState] = useState(defaultState);
    const [erros, setErros] = useState({ ...defaultState});
    const[buttonDisabled, setButtonDisabled] = useState(true);

    let formSchema = yup.object().shape({
        name: yup.string().required("Please provide your name").min(2),
        pizzaSize: yup.string().required("Select your size"),
        pepporoni: yup.boolean().optional(),
        hawaiian: yup.boolean().optional(),
        bbq: yup.boolean().optional(),
        chicken: yup.boolean().optional(),
        textarea: yup.boolean().optional(),
    })

    useEffect(() =>{
        formSchema.isValid(fromState).then(valid => setButtonDisabled (!valid));
    }, [fromState]);

    const formSubmit = e => {
        e.preventDefault();
        if (fromState){
            props.setOrder([...props.order, {fromState}])
        }
        axios
        .post("https://reqres.in/users", fromState)
        .then(() => console.log("form submitted was a sucess"))
        .catch(err => console.log(err));
    };
    
    const validateChange = e =>{
        e.perlist();
        yup
        .reach(formSchema, e.target.name)
        .validate(e.target.value)
        .then(() =>
        setErros({
            ...erros,
            [e.target.name]: ""
        })
    )
    .catch(error =>
        setErros({
            ...erros,
            [e.target.name]: error.erros[0]
        })
        );
    };

    const inputChange = e =>{
        const value =
        e.target.type === "checkbox" ? e.target.checked : e.target.valie;
        setFromState({
            ... fromState,
            [e.target.name]: value
        });
        validateChange(e);
    };
    return(
        <form onSubmit = {formSubmit}>
            <label htmlFor = 'name'>
                <Input  //comeback and check
                    id = 'name'
                    type = 'type'
                    name = 'name'
                    placeHolder = 'Enter Your Name Here'
                    onChange = {inputChange}
                    value = {fromState.name}
                    //errors = {errors}   //check error message
                />
            </label>
            <br />
            <br />
            <label htmlFor = 'size'>
                Please Choice a Size
                <select name = 'size' onChange = {inputChange}>
                    <option value='custome'>Custume</option>
                    <option value='small'>Small</option>
                    <option value='medium'>Medium</option>
                    <option value='large'>Large</option>
                </select>
            </label>

            <label htmlFor="pizzaSauce">
                <select name="pizzaSauce" onChange ={inputChange}>
                <option value = 'original'>Original</option>
                <option value = 'bbq'>BBQ Sauce</option>
                <option value = 'pastorelli'>Pastorelli Sauce</option>
                <option value = 'alfredo'>Alfredo Sauce</option>
                </select>
            </label>

            <div>
                <h2>Add Your Favorite Toppings!</h2>
                <label htmlFor="pepperoni">
                    Pepporoni
                    <input onChange={inputChange}
                    name="pepperoni"
                    type="checkbox"
                    value="pepperoni"
                    />
                </label>

                <label htmlFor="garlic">
                    Gralic
                    <input onChange={inputChange}
                    name="garlic"
                    type="garlic"
                    value="checkbox"
                    />
                </label>

                <label htmlFor="sausage">
                    Sausage
                    <input onChange={inputChange}
                    name="sausage"
                    type="checkbox"
                    value="sausage"
                    />
                </label>

                <label htmlFor="chicken">
                    Chicken
                    <input onChange={inputChange}
                    name="chicken"
                    type="chicken"
                    value="checkbox"
                    />
                </label>
            </div>

                <label htmlFor='instructions'>
                    Special instructions
                    <input 
                    id = 'instructions'
                    type = 'text'
                    name='instructions'
                    placeholder = 'Insert here'
                    onChange = {inputChange}
                    value = {fromState.instructions}
                    />
                </label>
                <br />
                <br />
                <button disabled = {buttonDisabled}>Submit</button>
        </form>
    )

}
export default Form

