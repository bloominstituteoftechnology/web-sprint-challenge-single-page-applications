import React from 'react';

export default function PizzaForm( props ) {
    const { values, update, submit, disabled, errors } = props;

    const onSubmit = (evt) => {
        evt.preventDefault();
        submit();
    };

    const onChange = (evt) => {
        const { name, value, type, checked } = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        update(name, valueToUse);
    }

    return (
        <form className= 'pizza-form-container'>

            <div className= 'title-container'>
                <h2>Build Your Own Pizza</h2>
            </div>
            <br />
                <div className='errors'>
                    <div>{errors.size}</div>
                    <div>{errors.sauces}</div>
                </div>

            <div className= 'img-container'>
                <img src ="img/Pizza.jpg" alt = 'pizza'/>
            </div>

            <div className= 'BYP'>
                <h3>Build Your Own Pizza</h3>
            </div>

            <div className= 'choose-your-size-container'>
                <h3>Pizza size</h3>
                <h4>Required</h4>

                <label>
                    Size
                    <select onChange = {onChange} value = {values.size} name="size">
                        <option value = "">--- select your size ---</option>
                        <option value ="small">small</option>
                        <option value ="medium">medium</option>
                        <option value ="large">large</option>
                        <option value ="extraLarge">extra large</option>
                    </select>
                </label>
            </div>

            <div className= 'choose-your-sauce-container'>
                <h3>Choice of Sauce</h3>
                <h4>Required</h4>
            </div>

            <div className='sauce-choice'>
                <label>
                    Marinara sauce
                        <input
                        type='radio'
                        name='sauces'
                        value={'marinara'}
                        checked={values.marinara === 'marinara'}
                        onChange={onChange}
                        />
                </label>

                <label>
                    Alfredo sauce
                        <input
                        type='radio'
                        name='sauces'
                        value={'alfredo'}
                        checked={values.alfredo === 'alfredo'}
                        onChange={onChange}
                        />
                </label>

                <label>
                    Pesto sauce
                        <input
                        type='radio'
                        name='sauces'
                        value={'pesto'}
                        checked={values.pesto === 'pesto'}
                        onChange={onChange}
                        />
                </label>

                <label>
                    Buffalo sauce
                        <input
                        type='radio'
                        name='sauces'
                        value={'buffalo'}
                        checked={values.buffalo === 'buffalo'}
                        onChange={onChange}
                        />
                </label>
            </div>

            <div className= 'choose-your-toppings-container'>
                <h3>Add Toppings</h3>
                <h4>Choose up to 10</h4>
            </div>

            <div className= 'toppings-choice'>
                <label>
                        Pepperoni
                        <input
                            type="checkbox"
                            name="pepperoni"
                            checked={values.pepperoni}
                            onChange={onChange}
                        />
                    </label>

                    <label>
                        Italian Sausage
                        <input
                            type="checkbox"
                            name="italianSausage"
                            checked={values.italianSausage}
                            onChange={onChange}
                        />
                    </label>

                    <label>
                        Canadian Bacon
                        <input
                            type="checkbox"
                            name="canadianBacon"
                            checked={values.canadianBacon}
                            onChange={onChange}
                        />
                    </label>

                    <label>
                        Grilled chicken
                        <input
                            type="checkbox"
                            name="chicken"
                            checked={values.chicken}
                            onChange={onChange}
                        />
                    </label>

                    <label>
                        Hamburger
                        <input
                            type="checkbox"
                            name="hamburger"
                            checked={values.hamburger}
                            onChange={onChange}
                        />
                    </label>

                    <label>
                        Spicy italian sausage
                        <input
                            type="checkbox"
                            name="spicyItalianSausage"
                            checked={values.spicyItalianSausage}
                            onChange={onChange}
                        />
                    </label>

                    <label>
                        Pineapple
                        <input
                            type="checkbox"
                            name="pineapple"
                            checked={values.pineapple}
                            onChange={onChange}
                        />
                    </label>

                    <label>
                        Black olives
                        <input
                            type="checkbox"
                            name="blackOlives"
                            checked={values.blackOlives}
                            onChange={onChange}
                        />
                    </label>

                    <label>
                        Jalepeno peppers
                        <input
                            type="checkbox"
                            name="jalepenoPeppers"
                            checked={values.jalepenoPeppers}
                            onChange={onChange}
                        />
                    </label>
                    <label>
                        Onions
                        <input
                            type="checkbox"
                            name="onions"
                            checked={values.onions}
                            onChange={onChange}
                        />
                    </label>

                    <label>
                        Green peppers
                        <input
                            type="checkbox"
                            name="greenPeppers"
                            checked={values.greenPeppers}
                            onChange={onChange}
                        />
                    </label>

                    <label>
                        Mushrooms
                        <input
                            type="checkbox"
                            name="mushrooms"
                            checked={values.mushrooms}
                            onChange={onChange}
                        />
                    </label>
                </div>

            <div className= 'special-instructions-container'>
                <h3>Special Instructions</h3>
            </div>

            <div className= 'special-instructions'>
                <label>
                    <input
                        name='specialInstructions'
                        type='text'
                        value={values.specialInstructions}
                        placeholder='Anything else you would like to add'
                        onChange={onChange}
                        maxLength='100'
                    />
                </label>
            </div>

            <div className='submit'>
                <button disabled={disabled} onSubmit={onSubmit}>Add to Order</button>

            </div>
        </form>
    )
}
