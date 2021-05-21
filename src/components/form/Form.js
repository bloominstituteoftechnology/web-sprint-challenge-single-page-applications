import React, { useState, useEffect } from 'react';
import Confirmation from './Confirmation';
import * as Yup from 'yup';

const Form = () => {
    const [order, setOrder] = useState({
        name: '',
        size: '',
        pepperoni: false,
        peppers: false,
        mushrooms: false,
        olive: false,
        chives: false,
        special: ''
    })

    const [orderPlaced, setOrderPlaced] = useState(false);
    const [disabled, setDisabled] = useState(true);

    const { name, size, pepperoni, peppers, mushrooms, olive, chives, special} = order;

    const changeHandler = e => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setOrder({...order, [e.target.name]: value});
    }

    const schema = Yup.object().shape({
        name: Yup
          .string()
          .required("Name is a required field")
          .min(3, "Name must be at least 3 characters")
    })

    const submitHandler = e => {
        e.preventDefault();
        console.log(order);
        setOrderPlaced(true);
    }

    useEffect(()=>{
        schema.isValid(order).then(valid => setDisabled(!valid))
    }, [order])

    return (
        <>
        <h2>Build Your Own Pizza</h2>
        {disabled && <p style={{color: 'red'}}>* Name is required</p>}
        { !orderPlaced && <form id="pizza-form" onSubmit={submitHandler}>
            <label htmlFor="name">
                Name
                <input type="text" name="name" id="name-input" value={name} onChange={changeHandler}/>
            </label>
            <hr/>
            <label htmlFor="size">
                Choose a Size
                <select name="size" id="size-dropdown" value={size} onChange={changeHandler}>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                </select>
                <hr/>
            </label>
            <p>Pick your Toppings</p>
            <label htmlFor="pepperoni">
                <input checked={pepperoni} type="checkbox" name="pepperoni" id="pepperoni" value={pepperoni} onChange={changeHandler}/>
                Pepperoni
            </label>
            <label htmlFor="peppers">
                <input checked={peppers} type="checkbox" name="peppers" id="peppers" value={peppers} onChange={changeHandler}/>
                Green Peppers
            </label>
            <label htmlFor="mushrooms">
                <input checked={mushrooms} type="checkbox" name="mushrooms" id="mushrooms" value={mushrooms} onChange={changeHandler}/>
                Mushrooms
            </label>
            <label htmlFor="olive">
                <input checked={olive} type="checkbox" name="olive" id="olive" value={olive} onChange={changeHandler}/>
                Olives
            </label>
            <label htmlFor="chives">
                <input checked={chives} type="checkbox" name="chives" id="chives" value={chives} onChange={changeHandler}/>
                Chives
            </label> 
            <hr/>
            <label htmlFor="special">
                Special Instructions <br/><br/>
                <textarea rows={8} cols={50} name='special' id ="special" placeholder='Add any special requests here!' value={special} onChange={changeHandler}/>
            </label>
            <hr/>
            <button id="order-button" type="submit" disabled={disabled}>ORDER</button>
        </form> }
        { orderPlaced && <Confirmation order={order}/> }
        </>
    )
}

export default Form;