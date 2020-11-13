import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    border: black 3px solid;
    border-radius: 10px;
    margin: 1rem;
    padding: 1rem;
    width: auto;
`

const Toppings = styled.div`
`

const OrderForm = (props) => {
    const { change, values, submit, buttonDisabled, errors } = props;

    const onChange = event => {
        const { value, name, checked, type } = event.target

        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse)
    }

    const onSubmit = event => {
        event.preventDefault();
        submit();
    }

    return (
        <div>
            <Link to={'/'}>
                Home
            </Link>

            <Container>
                <Form onSubmit={ onSubmit }>
                    <div className='warning'>
                        <div>{errors.name}{errors.size}</div>
                    </div>
                    <div>
                        <h2>Build A Pizza</h2>
                    </div>
                    <div className='Name'>
                        <label>Name: 
                            <input
                                name='name'
                                type='text'
                                data-cy='name'
                                value={values.name}
                                onChange={onChange}
                            />
                        </label>
                    </div>
                    <label>
                        <select
                            name='size'
                            data-cy='size'
                            value={values.size}
                            onChange={onChange}
                        >
                            <option value=''>Select a size</option>
                            <option value='Small'>Small</option>
                            <option value='Medium'>Medium</option>
                            <option value='Large'>Large</option>
                            <option value='Extra Large'>Extra Large</option>
                        </select>
                    </label>
                    <Toppings>
                        <h3>Toppings</h3>
                            <div>
                                <label>Pepperoni: 
                                    <input 
                                        name='pepperoni'
                                        type='checkbox'
                                        data-cy='pepperoni'
                                        checked={values.pepperoni}
                                        onChange={onChange}
                                    />
                                </label>
                                <label>Onion: 
                                    <input 
                                        name='onion'
                                        type='checkbox'
                                        data-cy='onion'
                                        checked={values.onion}
                                        onChange={onChange}
                                    />
                                </label>
                                <label>Green Pepper: 
                                    <input 
                                        name='greenPepper'
                                        type='checkbox'
                                        data-cy='greenPepper'
                                        checked={values.greenPepper}
                                        onChange={onChange}
                                    />
                                </label>
                                <label>Tomatoes: 
                                    <input 
                                        name='tomatoes'
                                        type='checkbox'
                                        data-cy='tomatoes'
                                        checked={values.tomatoes}
                                        onChange={onChange}
                                    />
                                </label>
                            </div>
                    </Toppings>
                    <div>
                        <label>Gluten Free Crust: 
                            <input 
                                name='glutenFree'
                                type='checkbox'
                                data-cy='glutenFree'
                                checked={values.glutenFree}
                                onChange={onChange}
                            />
                        </label>
                    </div>
                    <div>
                        <label>Additional Instructions:
                            <input 
                                name='instructions'
                                type='text'
                                data-cy='instructions'
                                value={values.instructions}
                                onChange={onChange}
                            />
                        </label>
                    </div>
                    <button disabled={buttonDisabled} data-cy='order'>Order</button>
                </Form>
            </Container>
        </div>
    )
}

export default OrderForm