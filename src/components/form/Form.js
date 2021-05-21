import React, { useState } from 'react';
import Confirmation from './Confirmation';

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

    const { name, size, pepperoni, peppers, mushrooms, olive, chives, special } = order;

    const changeHandler = e => {
        setOrder({...order, [e.target.name]: e.target.value});
    }

    const submitHandler = e => {
        e.preventDefault();
        console.log(order);
        setOrderPlaced(true);
    }

    return (
        <>
        <h2>Build Your Own Pizza</h2>
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
                <input type="checkbox" name="pepperoni" id="pepperoni" value={pepperoni} onChange={changeHandler}/>
                Pepperoni
            </label>
            <label htmlFor="peppers">
                <input type="checkbox" name="peppers" id="peppers" value={peppers} onChange={changeHandler}/>
                Green Peppers
            </label>
            <label htmlFor="mushrooms">
                <input type="checkbox" name="mushrooms" id="mushrooms" value={mushrooms} onChange={changeHandler}/>
                Mushrooms
            </label>
            <label htmlFor="olive">
                <input type="checkbox" name="olive" id="olive" value={olive} onChange={changeHandler}/>
                Olives
            </label>
            <label htmlFor="chives">
                <input type="checkbox" name="chives" id="chives" value={chives} onChange={changeHandler}/>
                Chives
            </label> 
            <hr/>
            <label htmlFor="special">
                Special Instructions <br/><br/>
                <textarea rows={8} cols={50} name='special' id ="special" placeholder='Add any special requests here!' value={special} onChange={changeHandler}/>
            </label>
            <hr/>
            <button id="order-button" type="submit">ORDER</button>
        </form> }
        { orderPlaced && <Confirmation order={order}/> }
        </>
    )
}

export default Form;