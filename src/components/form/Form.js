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

    const { name, size, pepperoni, peppers, mushrooms, olive, chives, special } = order;

    const changeHandler = e => {
        setOrder({...order, [e.target.name]: e.target.value});
    }

    const submitHandler = e => {
        e.preventDefault();
        console.log(order)
    }

    return (
        <>
        order.map()
        <h2>Build Your Own Pizza</h2>
        <form id="pizza-form" onSubmit={submitHandler}>
            <label htmlFor="name">
                Name
                <input type="text" name="name" id="name-input" value={name} onChange={changeHandler}/>
            </label>
            <hr/>
            <label htmlFor="size">
                Choose a Size
                <select name="size" id="size-dropdown" value={size} onChange={changeHandler}>
                    <option value="tall">Tall</option>
                    <option value="grande">Grande</option>
                    <option value="venti">Venti</option>
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
                and Green Peppers
            </label>
            <label htmlFor="mushrooms">
                <input type="checkbox" name="mushrooms" id="mushrooms" value={mushrooms} onChange={changeHandler}/>
                Mushrooms
            </label>
            <label htmlFor="olive">
                <input type="checkbox" name="olive" id="olive" value={olive} onChange={changeHandler}/>
                Olive
            </label>
            <label htmlFor="chives">
                <input type="checkbox" name="chives" id="chives" value={chives} onChange={changeHandler}/>
                Chives
            </label> 
            <hr/>
            <label htmlFor="special">
                Special Instructions <br/><br/>
                <textarea rows={8} cols={50} name='special' id ="special" placeholder='Need therapy, therapy, Advertising causes need, Need therapy, therapy, Advertising causes need.' value={special} onChange={changeHandler}/>
            </label>
            <hr/>
            <button id="order-button" type="submit">ORDER</button>
        </form>
        <Confirmation />
        </>
    )
}

export default Form;