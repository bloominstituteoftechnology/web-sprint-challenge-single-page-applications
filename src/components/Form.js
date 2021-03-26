import React from 'react';




//const toppings = [
  //  'pepperoni',
   // 'sausage',
  //  'pineapple',
   // 'peppers',
    //'chicken',
//]

const orderForm = (props) => {
  const {submit, values, change, disabled, errors} = props
  const onSubmit = evt => {
      evt.preventDefault()
      submit()
  }

const onChange = evt => {
    const {name, value, type, checked} = evt.target
    const newValue = type === 'checkbox' ? checked : value 
    change(name, newValue)
}

return (
    <>
        <div className = 'formHeader'>
            <h2> Customize your Pizza! </h2>
        </div>
        <form className = 'orderFormContainer' onSubmit = {onSubmit}>
                <div className = "errors">
                    <p>{errors.name}</p>
                    <p>{errors.size}</p>
                </div>
            <label htmlFor = 'name'> 
                <h3>Please Enter Your Name</h3>
                <input 
                value = {values.name}
                name = 'name'
                type = 'text'
                onChange = {onChange} />
            </label>
            <label htmlFor = 'size'> 
                <h3>Pick your Size </h3>
                <select
                onChange={onChange}
                value={values.size}
                name='size'>
                    <option value=''>Select size</option>
                    <option value='small'>Small</option>
                    <option value='medium'>Medium</option>
                    <option value='large'>Large</option>
                </select>
            </label>
            <h3> Select a Sauce </h3>
                <label htmlFor = 'Red'> 
                    <input
                        type = 'radio'
                        value = 'Red'
                        name = 'sauce'
                        checked = {values.sauce === 'Red'}
                        onChange = {onChange}
                        />
                </label>
                <label htmlFor = 'White'> 
                    <input
                        type = 'radio'
                        value = 'White'
                        name = 'sauce'
                        checked = {values.sauce === 'White'}
                        onChange = {onChange}
                        />
                </label>
                <label htmlFor = 'Spicy'> 
                    <input
                        type = 'radio'
                        value = 'Spicy'
                        name = 'sauce'
                        checked = {values.sauce === 'Spicy'}
                        onChange = {onChange}
                        />
                </label>
                 <h3>Add your toppings </h3> 
                 <h4>Choose your favorite toppings !</h4>
                    <label>Pepperoni
                    <input 
                        type='checkbox'
                        name='pepperoni'
                        onChange={onChange}
                    />
                    </label>
                    <label>Sausage 
                    <input 
                        type='checkbox'
                        name='sausage'
                        onChange={onChange}
                        />
                    </label>
                    <label>Pineapple
                    <input 
                        type='checkbox'
                        name='pineapple'
                        onChange={onChange}
                        />
                    </label>
                    <label>Peppers
                    <input 
                        type='checkbox'
                        name='peppers'
                        onChange={onChange}/>
                    </label>
                    <label>Chicken
                    <input 
                        type='checkbox'
                        name='chicken'
                        onChange={onChange}/>
                    </label>
                <label htmlFor='instructions'>
                    <h3> Special Instructions </h3>
                    <input 
                    placeholder = "Leave a note for your driver!"
                    type='text'
                    name='instructions'
                    value={values.instructions}
                    onChange={onChange} />
                </label>
                <button disabled={disabled}>Order Now!</button>
            </form>
        </>
);
};
export default orderForm;