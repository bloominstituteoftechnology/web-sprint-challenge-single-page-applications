import React from 'react'

const PizzaForm = ( props ) => {
    const { values, update, submit, disabled, errors } = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        const { name, value, type, checked } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value
        update(name, valueToUse)
    }

    return (
        <form className= 'pizza-form-container'>

            <div className= 'title-container'>
                <h2>Build Your Own Pizza</h2>
            </div>

            <div className= 'img-container'>
                <img src ="Assets\Pizza.jpg" alt = 'pizza'/>
            </div>

            <div className= 'BYP'>
                <h3>Build Your Own Pizza</h3>
            </div>

            <div className= 'choose-your-size-container'>
                <h3>Choice of Sauce</h3>
                <h4>Required</h4>

                <label>
                    <select name="size" value={values.size} onChange={onChange}>
                        <option value = ''>--- select your size ---</option>
                        <option value ="small">small</option>
                        <option value ="medium">medium</option>
                        <option value ="large">large</option>
                        <option value ="extra large">extra large</option>
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
                    Meats
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
                    </label>

                <label>
                    Veggies
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
                            Canadian Bacon
                            <input
                                type="checkbox"
                                name="canadianBacon"
                                checked={values.canadianBacon}
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
                    </label>
                </div>

            <div className= 'choice-of-substitue-container'>
                <h3>Choice of Substitute</h3>
                <h4>Choose up to 1</h4>
            </div>

            <div className= 'substitute-toggle-switch'>
                <input type="checkbox" class="toggle-switch-checkbox" name="toggleSwitch" id="toggleSwitch" />
                    <label class="toggle-switch-label" for="toggleSwitch">
                        Gluten Free Crust (+ $1.00)
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

export default PizzaForm
