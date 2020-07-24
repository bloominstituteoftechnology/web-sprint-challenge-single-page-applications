import React from 'react'

export default function Form(props){

    const {
        values,
        submit,
        inputChange,
        checkboxChange,
        disabled,
        errors,
      } = props

      const onSubmit = evt => {
        evt.preventDefault()
        submit()
      }
    
      const onCheckboxChange = evt => {
        const { name, checked } = evt.target
        checkboxChange(name, checked)
      }
    
      const onInputChange = evt => {
        const { name, value, type } = evt.target
        inputChange(name, value, type)
      }

    return(
        <form className='form-container'onSubmit={onSubmit}>
            <h2>Build Your Own Pizza</h2>
            <div className='form-inputs'>
                <div className='size'>
                    <h3>Choice of Size</h3>
                    {/* <div>{errors.size}</div> */}
                        <select
                        onChange={onInputChange}
                        value={values.size}
                        name='size'
                        >
                            <option value=''>-Select an Option-</option>
                            <option value='small'>Small</option>
                            <option value='medium'>Medium</option>
                            <option value='large'>Large</option>
                            <option value='xl'>Extra-Large</option>
                        </select>
                </div>
                <div className='sauce'>
                    <h3>Choice of Sauce</h3>
                    {/* <div>{errors.sauce}</div> */}
                    <label>Original Red
                        <input
                            type='radio'
                            name='sauce'
                            value='original'
                            checked={values.sauce === 'original'}
                            onChange={onInputChange}
                        />
                    </label>
                    <label> Garlic Ranch
                        <input
                            type='radio'
                            name='sauce'
                            value='ranch'
                            checked={values.sauce === 'ranch'}
                            onChange={onInputChange}
                        />
                    </label>
                    <label>BBQ Sauce
                        <input
                            type='radio'
                            name='sauce'
                            value='bbq'
                            checked={values.sauce === 'bbq'}
                            onChange={onInputChange}
                        />
                    </label>
                    <label>Spinich Alfredo
                        <input
                            type='radio'
                            name='sauce'
                            value='alfredo'
                            checked={values.sauce === 'alfredo'}
                            onChange={onInputChange}
                        />
                    </label>
                </div>
                <div className='toppings'>
                <h3>Add Toppings</h3>
                    {/* <div>{errors.toppings}</div> */}
                    <label>Pepperoni
                    <input
                        type="checkbox"
                        name='pepperoni'
                        checked={values.toppings.pepperoni === true}
                        onChange={onCheckboxChange}
                    />
                    </label>
                    <label>Sausage
                    <input
                        type="checkbox"
                        name='sausage'
                        checked={values.toppings.sausage === true}
                        onChange={onCheckboxChange}
                    />
                    </label>
                    <label>Canadian Bacon
                    <input
                        type="checkbox"
                        name='canadian'
                        checked={values.toppings.canadian === true}
                        onChange={onCheckboxChange}
                    />
                    </label>
                    <label>Spicy Italian Sausage
                    <input
                        type="checkbox"
                        name='italian'
                        checked={values.toppings.italian === true}
                        onChange={onCheckboxChange}
                    />
                    </label>
                    <label>Grilled Chicken
                    <input
                        type="checkbox"
                        name='chicken'
                        checked={values.toppings.chicken === true}
                        onChange={onCheckboxChange}
                    />
                    </label>
                    <label>Onions
                    <input
                        type="checkbox"
                        name='onions'
                        checked={values.toppings.onions === true}
                        onChange={onCheckboxChange}
                    />
                    </label>
                    <label>Green Peppers
                    <input
                        type="checkbox"
                        name='peppers'
                        checked={values.toppings.peppers === true}
                        onChange={onCheckboxChange}
                    />
                    </label>
                    <label>Diced Tomatos
                    <input
                        type="checkbox"
                        name='tomatos'
                        checked={values.toppings.tomatos === true}
                        onChange={onCheckboxChange}
                    />
                    </label>
                    <label>Black Olives
                    <input
                        type="checkbox"
                        name='olives'
                        checked={values.toppings.olives === true}
                        onChange={onCheckboxChange}
                    />
                    </label>
                    <label>Roasted Garlic
                    <input
                        type="checkbox"
                        name='garlic'
                        checked={values.toppings.garlic === true}
                        onChange={onCheckboxChange}
                    />
                    </label>
                    <label>Artichoke Hearts
                    <input
                        type="checkbox"
                        name='artichoke'
                        checked={values.toppings.artichoke === true}
                        onChange={onCheckboxChange}
                    />
                    </label>
                    <label>Three Cheese
                    <input
                        type="checkbox"
                        name='threecheese'
                        checked={values.toppings.threecheese === true}
                        onChange={onCheckboxChange}
                    />
                    </label>
                    <label>Pineapple
                    <input
                        type="checkbox"
                        name='pineapple'
                        checked={values.toppings.pineapple === true}
                        onChange={onCheckboxChange}
                    />
                    </label>
                    <label>Extra Cheese
                    <input
                        type="checkbox"
                        name='xcheese'
                        checked={values.toppings.xcheese === true}
                        onChange={onCheckboxChange}
                    />
                    </label>
                </div>
                <div className='size'>
                    <h3>Special Instructions</h3>
                        <input
                            value={values.special}
                            onChange={onInputChange}
                            name='special'
                            type='text'
                        />
                </div>
                <button /*disabled={disabled}*/>submit</button>
            </div>
        </form>
    )

}