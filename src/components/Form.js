import React, {useState, useEffect} from 'react';
import * as yup from 'yup';
import Input from './Input';
import './form.css';
import axios from 'axios';


const PizzaForm = props => {
    const defaultPizza = {
        name: '',
        size: '',
        olives: false,
        mushrooms: false,
        pepperoni: false,
        extraCheese: false,
        specInst: ''
    }

    const [newPizza, setNewPizza] = useState(defaultPizza);
    const [buttonOff, buttonTog] = useState(true);
    const [errors, setErrors ] = useState({ ...defaultPizza, terms: "" });

    const pizzaSchema = yup.object().shape({
        name: yup.string().min(2).required('please fill in name'),
        size: yup.string(),
        olives: yup.boolean(),
        mushrooms: yup.boolean(),
        pepperoni: yup.boolean(),
        extraCheese: yup.boolean(),
        specInst: yup.string(),
    });

    const validateField = e => {
        e.persist();
        
        yup
          .reach(pizzaSchema, e.target.name)
          .validate(e.target.value)
          .then(valid =>
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
          );}

    const change = e => {
        const value =
          e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setNewPizza({
          ...newPizza,
          [e.target.name]: value
        });
        validateField(e);
    };

    const submitForm = (e) => {
        e.preventDefault();
        props.setPizzas([...props.pizzas, newPizza]);
        axios.post(`https://reqres.in/api/users`,newPizza)
        .then(() => {
            console.log('form submitted')
            console.log(props.pizzas);
            alert('Pizza added to order!');
            }
        )
        .catch(er => {
            console.log('there was an error',er);
        })

    }

    useEffect(() => {
        pizzaSchema.isValid(newPizza).then(valid => buttonTog(!valid));
    }, [newPizza])

    return (
        <div className='box'>
            <form onSubmit={submitForm}>
                <Input type='text' label='Name' name='name' value={newPizza.name} onChange={change}/>
                <select name='size' onChange={change}>
                    <option value='small'>Small</option>
                    <option value='medium'>Medium</option>
                    <option value='large'>Large</option>
                    <option value='extra-large'>Extra Large</option>
                </select>
                <div className='checkboxes'>

                <Input type='checkbox' label='olives' name='olives' value={newPizza.olives} onChange={change}/>

                <Input type='checkbox' label='mushrooms' name='mushrooms' value={newPizza.mushrooms} onChange={change}/>

                <Input type='checkbox' label='pepperoni' name='pepperoni' value={newPizza.pepperoni} onChange={change}/>

                <Input type='checkbox' label='Extra Cheese' name='extraCheese' value={newPizza.extraCheese} onChange={change}/>

                </div>

                <Input type='text' label='Special Instructions' name='specInst' value={newPizza.specInst} onChange={change}/>

                <button disabled={buttonOff} type='submit'>Add to Order</button>
            </form>
        </div>
    )
}

export default PizzaForm;