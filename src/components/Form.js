import React, {useState, useEffect} from 'react';
import axios from 'axios';
import * as yup from "yup";



const formSchema = yup.object().shape({
    name: yup.string().required("Name is a required field."),
    size: yup.string().required("Must Select a Size"),
    pepperoni: yup.boolean().defined(),
    ham: yup.boolean().defined(),
    bacon: yup.boolean().defined(),
    pineapple: yup.boolean().defined(),
    specInstr: yup.string().notRequired()
  });

export default function Form(){

    const [formState, setFormState] = useState({
        name: "",
        size: "",
        pepperoni: false,
        ham: false,
        bacon: false,
        pineapple: false,
        specInstr: ""
    })

    const [errors, setErrors] = useState({
        name: "",
        size: "",
        pepperoni: "",
        ham: "",
        bacon: "",
        pineapple: "",
        specInstr: ""
    })

    const [buttonDisabled, setButtonDisabled] = useState(true);

    const [post, setPost] = useState([]);

    const inputChange = e => {
        e.persist();
        const newFormData = {
          ...formState,
          [e.target.name]:
            e.target.type === "checkbox" ? e.target.checked : e.target.value
        };

        validateChange(e);
        setFormState(newFormData);
      };

    useEffect(() => {
        formSchema.isValid(formState).then(valid => {
          setButtonDisabled(!valid);
        });
      }, [formState]);

    const validateChange = e => {
        yup
          .reach(formSchema, e.target.name)
          .validate(e.target.value)
          .then(valid => {
            setErrors({
              ...errors,
              [e.target.name]: ""
            });
          })
          .catch(err => {
            setErrors({
              ...errors,
              [e.target.name]: err.errors[0]
            });
          });
      };
    //on submit
    const formSubmit = e => {
        e.preventDefault();
        axios
          .post("https://reqres.in/api/users", formState)
          .then(res => {
            setPost(res.data);
            console.log("success", post);
            console.log(res.data.size)
            setFormState({
                name: "",
                size: res.data.size,
                pepperoni: false,
                ham: false,
                bacon: false,
                pineapple: false,
                specInstr: ""
            });
          })
          .catch(err => console.log(err.response));
      };
    return(


        <form onSubmit = {formSubmit}>
        
            <h1 id="order">Place an Order!</h1>
            <label htmlFor = 'name'>
                <h1>What is your name?</h1>
                <br/>
                <input
                type = 'text'
                name = 'name'
                id = 'nameinput'
                placeholder = 'Name'
                value={formState.name}
                onChange={inputChange}
                />
            </label>


            <label htmlFor = 'size'>
                <h1>What size pizza would you like?</h1>
                <br/>
                <select name = 'size' id = 'sizeinput' onChange = {inputChange}>
                    <option name="default" value={null}></option>
                    <option name="Sm" value='Sm'>Small</option>
                    <option name="Md" value='Md'>Medium</option>
                    <option name="Lg" value='Lg'>Large</option>
                    <option name="XL" value='XL'>XL-Large</option>
                </select>
            </label>
            <br/>

            <div className = 'toppingsChecklist'>

                <p>Select Toppings</p>

                <label htmlFor = 'pepperoni'>
                    <input
                        type='checkbox'
                        name='pepperoni'
                        id = 'pepperoniCheckBox'
                        checked={formState.pepperoni} 
                        onChange={inputChange}
                    /> 
                    Pepperoni
                </label>
                <br/>

                <label htmlFor = 'ham'>
                    <input
                        type='checkbox'
                        name='ham'
                        id = 'hamCheckBox'
                        checked={formState.ham} 
                        onChange={inputChange}
                    />
                    Ham
                </label>
                <br/>

                <label htmlFor = 'bacon'>
                    <input
                        type='checkbox'
                        name='bacon'
                        id = 'baconCheckBox'
                        checked={formState.bacon} 
                        onChange={inputChange}
                    /> 
                    Bacon
                </label>
                <br/>

                <label htmlFor = 'pineapple'>
                    <input
                        type='checkbox'
                        name='pineapple'
                        id = 'pineappleCheckBox'
                        checked={formState.pineapple} 
                        onChange={inputChange}
                    />
                    Pineapple
                </label>
                <br/>

            </div>

            <label htmlFor = 'Special Instructions'>
                <h1>Any special instructions?</h1>
                <br/>
                <textarea
                name = 'specInstr'
                id = 'specInstrInput'
                placeholder = 'Type instructions here...'
                value={formState.specInstr} 
                onChange={inputChange}
                />
            </label>
            <button name = 'submit' disabled={buttonDisabled}>Submit</button>
            <pre>{JSON.stringify(post, null, 2)}</pre>
            

        </form>

    )

} 