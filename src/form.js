import React from 'react';

export default function Form(props){
    const{
        values, 
        submit,
        change, 
        disabled, 
        errors,
    } = props;

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt =>{
        const {name, value, type, checked} = evt.target
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse)
    }

    return(
        <form className = 'formcont' onSubmit={onSubmit}>
              <label>Please enter your name
                <input
                    value={values.name}
                    onChange={onChange}
                    name='name'
                    type='text'
                    />
              </label>
              <label>Size
          <select
            onChange={onChange}
            value={values.size}
            name='size'
          >
            <option value=''>- Select an option -</option>
            <option value='8'>8 inch</option>
            <option value='16'>16 inch</option>
            <option value='32'>32 inch</option>
            <option value='rml'>drown me in pizza</option>
          </select>
        </label>
        <label>pepperoni
          <input
            type="checkbox"
            name='pepperoni'
            checked={values.pepperoni}
            onChange={onChange}
          />
        </label>
        <label>peppers
          <input
            type="checkbox"
            name='peppers'
            checked={values.peppers}
            onChange={onChange}
          />
        </label>
        <label>sausage
          <input
            type="checkbox"
            name='sausage'
            checked={values.sausage}
            onChange={onChange}
          />
        </label>
        <label>pineapple
          <input
            type="checkbox"
            name='pineapple'
            checked={values.pineapple}
            onChange={onChange}
          />
        </label>
        <label>Special instructions
                <input
                    value={values.instructions}
                    onChange={onChange}
                    name='instructions'
                    type='text'
                    />
              </label>

        <button id='submitbutton' disabled={disabled}>submit</button>

        <div className='errors'>
        {/* 🔥 RENDER THE VALIDATION ERRORS HERE */}
        <div>{errors.username}</div>
        <div>{errors.email}</div>
        <div>{errors.role}</div>
        <div>{errors.civil}</div>
        </div>


        </form>
    )
}