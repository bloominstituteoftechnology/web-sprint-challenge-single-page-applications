import React from 'react';
import * as yup from 'yup';
import styled from 'styled-components';


const defaultFormState = {
    name: '',
    phone: '',
    size: '',
    sauce: 'Original Red',
    toppings: {
        pepperoni: false,
        sausage: false,
        canadianBacon: false,
        spicyItalian: false,
        grilledChicken: false,
        onions: false,
        greenPepper: false,
        dicedTomatos: false,
        blackOlives: false,
        roastedGarlic: false,
        artichokeHearts: false,
        threeCheese: false,
        pineapple: false,
        extraCheese: false,
    },
    glutenFree: false,
    specialIntructions: '',

    
}



const FoodForm = props => {
    const [formState,setFormState] = useState(defaultFormState);
    const [errors, setErrors] = useState(defaultErrorState);
    const[isDisable, setIsDisable] = useState(true);


    return (<div>
            <label>
                <input type='text' name='name' onChange={handleChange} data-cy='name' value={formState.name} />
            </label>
            <label>
                <input type='tel' name='phone' onChange={handleChange} data-cy='phone' value={formState.phone} />
            </label>
            <label>
                <select name='size' data-cy='size' defaultValue='small'>
                    <option value='small'>Small</option>
                    <option value='medium  '>Medium</option>
                    <option value='large'>Large</option>
                </select>
            </label>
            <fieldset>
            <label>
                <input type='radio' name='sauceType' onChange={handleChange} data-cy='0' value='0' />
                Original Red
            </label>
            <label>
                <input type='radio' name='sauceType' onChange={handleChange} data-cy='1' value='1' />
                Garlic Ranch
            </label>
            <label>
                <input type='radio' name='sauceType' onChange={handleChange} data-cy='2' value='2' />
                BBQ Sauce
            </label>
            <label>
                <input type='radio' name='sauceType' onChange={handleChange} data-cy='3' value='3' />
                Spinach Alfredo
            </label>
            </fieldset>
            <fieldset>
            <label>
                <input type='checkbox' name='toppings' onChange={handleChange} data-cy='pepperoni' value={pepperoni} />
            </label>
            <label>
                <input type='checkbox' name='toppings' onChange={handleChange} data-cy='sausage' value={sausage} />
            </label>
            <label>
                <input type='checkbox' name='toppings' onChange={handleChange} data-cy='canadianBacon' value={candianBacon} />
            </label>
            <label>
                <input type='checkbox' name='toppings' onChange={handleChange} data-cy='spicyItalian' value={spicyItalian} />
            </label><label>
                <input type='checkbox' name='toppings' onChange={handleChange} data-cy='grilledChicken' value={grilledChicken} />
            </label>
            <label>
                <input type='checkbox' name='toppings' onChange={handleChange} data-cy='onions' value={onions} />
            </label>
            <label>
                <input type='checkbox' name='toppings' onChange={handleChange} data-cy='greenPepper' value={greenPepper} />
            </label>
            <label>
                <input type='checkbox' name='toppings' onChange={handleChange} data-cy='dicedTomatos' value={dicedTomatos} />
            </label><label>
                <input type='checkbox' name='toppings' onChange={handleChange} data-cy='blackOlives' value={blackOlives} />
            </label>
            <label>
                <input type='checkbox' name='toppings' onChange={handleChange} data-cy='roastedGarlic' value={roastedGarlic} />
            </label>
            <label>
                <input type='checkbox' name='toppings' onChange={handleChange} data-cy='artichokeHearts' value={artichokeHearts} />
            </label>
            <label>
                <input type='checkbox' name='toppings' onChange={handleChange} data-cy='threeCheese' value={threeCheese} />
            </label><label>
                <input type='checkbox' name='toppings' onChange={handleChange} data-cy='pineapple' value={pineapple} />
            </label>
            <label>
                <input type='checkbox' name='toppings' onChange={handleChange} data-cy='extraCheese' value={extraCheese} />
            </label>
            </fieldset>
            
            
    </div>);
       
}

export default FoodForm;