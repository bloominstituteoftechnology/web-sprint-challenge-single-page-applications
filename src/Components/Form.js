import React from 'react'
import { Link} from 'react-router-dom'

export default function Form(props) {
  const {
    values,
    submit,
    change,
    disabled,
    errors,
  } = props

  const onSubmit = evt => {
    evt.preventDefault()
    submit()
  }

  const onChange = evt => {
    const { name, value, type, checked } = evt.target;
    const newValue = type === 'checkbox' ? checked : value
    change(name, newValue)
  }


  return (
    <div className='form'>
      <nav>
        <div className='logoContainer'>LAMBDA EATS</div>
        <div className='navButtonsContainer'>
          <Link to='/'>Home</Link>
          <Link to='/pizza'>Pizza</Link> 
        </div>
      </nav>
      <form className='form container' onSubmit={onSubmit}>
        <div className='form-group title'>
          <h2>Build Your Own Pizza</h2>
        </div>
        <div className='form-group dropdown'>
          <h4>Build Your Own Pizza</h4>

          <label>Choice of Size
            <select
              onChange={onChange}
              value={values.size}
              name='size'
            >
              <option value=''>- Select an option -</option>
              <option value='sm'>Small</option>
              <option value='md'>Medium</option>
              <option value='lg'>Large</option>
              <option value='pl'>Party</option>
            </select>
          </label>
        </div>
        <div className='form-group radios'>
          <label>Choice of Sauce
          <label>
              <input 
                type='radio'
                name='sauce'
                value='red'
                checked={values.sauce === 'red'}
                onChange={onChange}
              />
              Original Red
            </label>
            <label>
              <input 
                type='radio'
                name='sauce'
                value='garlic'
                checked={values.sauce === 'garlic'}
                onChange={onChange}
              />
              Garlic Ranch
            </label>
            <label>
              <input 
                type='radio'
                name='sauce'
                value='bbq'
                checked={values.sauce === 'bbq'}
                onChange={onChange}
              />
              BBQ Sauce
            </label>
            <label>
              <input 
                type='radio'
                name='sauce'
                value='alfredo'
                checked={values.sauce === 'alfredo'}
                onChange={onChange}
              />
              Spinach Alfredo
            </label>
          </label>

        </div> {/* end of radios */}
        <div className='form-group checkboxes'>
          <label>Add Toppings
            <label>
              <input
                type='checkbox'
                name='pepperoni'
                checked={values.pepperoni}
                onChange={onChange}
              />
              Pepperoni
            </label>

            <label>
            <input
                type='checkbox'
                name='pineapple'
                checked={values.pineapple}
                onChange={onChange}
              />
              Pineapple
            </label>

            <label>
            <input
                type='checkbox'
                name='onions'
                checked={values.onions}
                onChange={onChange}
              />
              Onions
            </label>

            <label>
            <input
                type='checkbox'
                name='olives'
                checked={values.olives}
                onChange={onChange}
              />
              Olives
            </label>
          </label>
        </div> {/*end of checkboxes */}

          {/* ////////// TEXT INPUTS ////////// */}
          {/* ////////// TEXT INPUTS ////////// */}
          {/* ////////// TEXT INPUTS ////////// */}
        <div className ='form-group checkboxes'>
          <label>Special Instructions
            <input
              value={values.additions}
              onChange={onChange}
              name='additions'
              type='text'
              placeholder="Anything else you'd like to add?"
            />
          </label>
          <label>Name
            <input
              value={values.name}
              onChange={onChange}
              name='name'
              type='text'
            />
          </label>
        </div> {/* end of text inputs*/}
        <div className='errors'>
          <div>{errors.size}</div>
          <div>{errors.sauce}</div>
          <div>{errors.name}</div>
        </div>
        <input type='submit' id='submitBtn' value='Add to Order' disabled={disabled}></input>
      </form>
      <div className='submittedOrders'>
        {`${values.name}`}
      </div>
    </div>
  )
}
