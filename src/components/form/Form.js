import React from 'react';
import Confirmation from './Confirmation';

const Form = () => {
    const submitHandler = e => {
        e.preventDefault();
        console.log(e);
};

    const onChangeHandler = e => {
        console.log(e);
    }

    return (
        <>
        <form id="pizza-form" onSubmit={submitHandler}>
            <label htmlFor="name">
                Name
                <input type="text" name="name" id="name-input" onChange={e => onChangeHandler(e.target.value)}/>
            </label>
            <label htmlFor="pizza-size">
                Choose a Size
                <select name="pizza-size" id="size-dropdown" onChange={onChangeHandler}>
                    <option value="tall">Tall</option>
                    <option value="grande">Grande</option>
                    <option value="venti">Venti</option>
                </select>
            </label>
            <p>Pick your Toppings</p>
            <label htmlFor="pepperoni">
                <input type="checkbox" name="pepperoni" id="pepperoni" value="pepperoni" onChange={onChangeHandler}/>
                Pepperoni
            </label>
            <label htmlFor="green-peppers">
                <input type="checkbox" name="green-peppers" id="green-peppers" value="green-peppers" onChange={onChangeHandler}/>
                and Green Peppers
            </label>
            <label htmlFor="mushrooms">
                <input type="checkbox" name="mushrooms" id="mushrooms" value="mushrooms" onChange={onChangeHandler}/>
                Mushrooms
            </label>
            <label htmlFor="olive">
                <input type="checkbox" name="olive" id="olive" value="olive" onChange={onChangeHandler}/>
                Olive
            </label>
            <label htmlFor="chives">
                <input type="checkbox" name="chives" id="chives" value="chives" onChange={onChangeHandler}/>
                Chives
            </label> <br /><br />
            <label htmlFor="special-text">
                Special Instructions
                <input type="textarea" name="special-text" id="special-text" placeholder="Need therapy?" onChange={onChangeHandler}/>
            </label><br /><br />
            <button id="order-button" type="submit">ORDER</button>
        </form>
        <Confirmation />
        </>
    )
}

export default Form;