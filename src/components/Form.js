import React from 'react';

// Props

export default function Form(props) {
    const {
        values,
        onSubmit,
        onInputChange,
        onCheckboxChange,
        disabled,
        errors,
    } = props
    return (
        <div style={{width:"80%", margin:"48px 10%"}}>
            <form onSubmit={onSubmit}>
                <h2>Build Your Own Pizza</h2>
                    <div>Name</div>
                        <input className='uk-input' type='text' name='name' onChange={onInputChange} checked={values.name} />
                        <div>{errors.name}</div><br />
                        <select onChange={onInputChange} value={values.size} name='size'>
                                <option value=''>== Choose A Size ==</option>
                                <option value='small'>Small</option>
                                <option value='medium'>Medium</option>
                                <option value='large'>Large</option>
                        </select>
                        <div>{errors.size}</div><br />
                    <hr />
                    <div>Sauces</div>
                        <input className='uk-checkbox' type='checkbox' name='red' onChange={onCheckboxChange} checked={values.sauce.red} /> Red Sauce
                        <input className='uk-checkbox' type='checkbox' name='garlic' onChange={onCheckboxChange} checked={values.sauce.garlic} /> Garlic Rub
                        <input className='uk-checkbox' type='checkbox' name='spicy' onChange={onCheckboxChange} checked={values.sauce.spicy} /> Spicy Chilli Sauce
                        <input className='uk-checkbox' type='checkbox' name='bbq' onChange={onCheckboxChange} checked={values.sauce.bbq} /> BBQ Sauce
                        <div>{errors.sauce}</div><br />
                    <hr />
                        <input className='uk-checkbox' type='checkbox' name='mozzarella' onChange={onCheckboxChange} checked={values.cheese.mozzarella} /> Mozzarella
                        <input className='uk-checkbox' type='checkbox' name='parmesan' onChange={onCheckboxChange} checked={values.cheese.parmesan} /> Parmesan
                        <div>{errors.cheese}</div><br />
                    <hr />
                        <textarea className='uk-textarea' rows='3' name='instructions' onChange={onInputChange} value={values.instructions}></textarea>
                        <button disabled={disabled}>Add to Order</button>
                    </form>
                    </div>
    )
}