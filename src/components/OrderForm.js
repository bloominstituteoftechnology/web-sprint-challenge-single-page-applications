import React from 'react';

import Header from './Header';

export default function OrderForm({
  values,
  change,
  disabled,
  errors,
  submit,
}) {
  const onChange = (evt) => {
    const { name, value, type, checked } = evt.target;
    const valueToUse = type === 'checkbox' ? checked : value;
    change(name, valueToUse);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    submit();
  };

  return (
    <div>
      <Header />
      <form onSubmit={onSubmit}>
        <div className='inputs'>
          <label>
            Name
            <div>{errors.name}</div>
            <input
              type='text'
              name='name'
              value={values.name}
              onChange={onChange}
            />
          </label>
          <select
            className='dropdown'
            name='size'
            value={values.size}
            onChange={onChange}
          >
            <option value=''>select size</option>
            <option value='small'>Small</option>
            <option value='medium'>Medium</option>
            <option value='large'>Large</option>
            <option value='wumbo'>Wumbo</option>
          </select>
          <label>
            Spinach
            <input
              type='checkbox'
              name='spinach'
              // let the checkbox be checked if the value inside state resolves to true!
              checked={values.spinach}
              onChange={onChange}
            />
          </label>
          <label>
            Mushrooms
            <input
              type='checkbox'
              name='shrooms'
              checked={values.shrooms}
              onChange={onChange}
            />
          </label>
          <label>
            Olives
            <input
              type='checkbox'
              name='olives'
              checked={values.olives}
              onChange={onChange}
            />
          </label>
          <label>
            Green Bell Peppers
            <input
              type='checkbox'
              name='peppers'
              checked={values.peppers}
              onChange={onChange}
            />
          </label>
          <label>
            Special Instructions
            <div>{errors.special}</div>
            <input
              type='text'
              name='special'
              value={values.special}
              onChange={onChange}
            />
          </label>
          <div>
            <button className='confirm-butt' disabled={disabled}>
              Place Order
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

// const StyledForm = styled.form`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
// `;
