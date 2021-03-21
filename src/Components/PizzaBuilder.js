import React, { useState } from "react";
import { Special, FormBody } from './Styled.js';
import * as yup from 'yup';

const PizzaBuilder = () => {
  let pizzaSchema = yup.object().shape({
    name: yup.string().required(),
    phone: yup.string().required(),
    size: yup.string().required(),
    toppings: yup.array(),
    special: yup.string(),
  });



  const initialPizzaState = {
    name: '',
    phone: '',
    size: '',
    toppings: [],
    special: '',
  };
  const [pizza, setPizza] = useState(initialPizzaState);

  const validate = e => {
    pizzaSchema.isValid(e)
    .then(valid => console.log('valid?', valid));
  };

  const inputChange = (e) => {
    validate(pizza);
    let { name, phone, size, toppings, special } = pizza
    e.target.type === 'checkbox' ? setPizza({ ...pizza, toppings.push[e.target.id] }) : setPizza({ ...pizza, [e.target.name]: e.target.value });
    // e.target.type === 'checkbox' ? e.target.id : e.target.value;
    // setPizza({ ...pizza, [e.target.name]: value });
  };

  return (
    <React.Fragment>
    <FormBody className='text-center mt-5'>

    <h3 className='mb-4'>Contact</h3>
    <form className='d-flex justify-content-center flex-column'>
    <label forHtml='name'>Name:
    <input
    id='name'
    name='name'
    type='text'
    onChange={inputChange}
    placeholder='Full Name'
    className='ml-3 form-control'
    />
    </label>

    <label forHtml='phone'>Phone:
    <input
    id='phone'
    name='phone'
    type='text'
    onChange={inputChange}
    placeholder='Phone Number'
    className='ml-3 form-control'
    />
    </label>

    <h3 className='mt-5'>Pizza!</h3>
    <label forHtml='size'>Which Size?
    <select
    id='size'
    name='size'
    className='ml-3 pl-3 pr-3 form-control' onChange={inputChange}>
    <option>Small</option>
    <option>Medium</option>
    <option>Large</option>
    </select>
    </label>

    <h3 className='mt-5'>Toppings~</h3>
    <label forHtml='pepperoni'>Pepperoni
    <input
    id='pepperoni'
    name='toppings'
    type='checkbox'
    onChange={inputChange}
    className='ml-2'
    />
    </label>

    <label forHtml='sausage'>Sausage
    <input
    id='sausage'
    name='toppings'
    type='checkbox'
    onChange={inputChange}
    className='ml-2'
    />
    </label>

    <label forHtml='mushroom'>Mushroom
    <input
    id='mushroom'
    name='toppings'
    type='checkbox'
    onChange={inputChange}
    className='ml-2'
    />
    </label>

    <label forHtml='onion'>Onion
    <input
    id='onion'
    name='toppings'
    type='checkbox'
    onChange={inputChange}
    className='ml-2'
    />
    </label>

    <label forHtml='special' className='d-flex justify-content-center flex-column'>
    <h3 className=''>Special Instructions</h3>
    <Special
    id='special'
    name='special'
    className='form-control'
    onChange={inputChange}
    />
    </label>

    <label forHtml='submit'>
    <input
    id='submit'
    name='submit'
    type='submit'
    className='btn btn-primary'
    />
    </label>

    </form>
    </FormBody>
    </React.Fragment>
  );
};

export default PizzaBuilder;
