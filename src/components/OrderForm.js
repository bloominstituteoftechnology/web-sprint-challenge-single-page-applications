import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const OrderFormPage = styled.div`
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        background-color: #333;
    }
    .logo {
        float: left;
        background-color: #EC3944;
        padding: 14px 16px;
    }
    .logo a {
        text-decoration: none;
        color: white;
        font-weight: bold;
    }
`

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;

    .warning {
        color: red;
        font-weight: bold;
    }
    .warning p {
        text-align: center;
    }
    h2 {
        margin-top: 0;
        text-align:center;
        font-size: 1.75rem;
    }
`

const Form = styled.form`
    align-self: center;
    display: flex;
    flex-direction: column;
    border: black 3px solid;
    border-radius: 10px;
    margin: 1rem;
    padding: 1rem;
    width: auto;
    width: 30rem;
    height: 30rem;

    .inputItem {
        margin: .5rem;
    }

    .inputButton {
        justify-content: center;
        margin: auto;
    }

    .inputButton button {
        height: 2rem;
        width: 8rem;
    }

    #gluten {
        font-weight: bold;
    }
`

const Toppings = styled.div`
    h3 {
        margin: 10px 0 10px 0;
    }
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
        <OrderFormPage>
            <ul>
                <li className='logo'><Link to={'/'}>Lambda Eats</Link></li>
            </ul>

            <Container>
                <Form onSubmit={ onSubmit }>
                    <div className='warning'>
                        <p>{errors.name}</p>
                        <p>{errors.size}</p>
                    </div>
                    <div className='headerPizza'>
                        <h2>Build A Pizza</h2>
                    </div>
                    <div className='inputItem'>
                        <label>Name: </label>
                            <input
                                name='name'
                                type='text'
                                data-cy='name'
                                value={values.name}
                                onChange={onChange}
                            />
                    </div>
                    <div className='inputItem'>
                        <label>Size: </label>
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
                    </div>

                    <Toppings>
                        <h3>Toppings</h3>
                            <div>
                                <div className='inputItem'>
                                    <label>Pepperoni: 
                                        <input 
                                            name='pepperoni'
                                            type='checkbox'
                                            data-cy='pepperoni'
                                            checked={values.pepperoni}
                                            onChange={onChange}
                                        />
                                    </label>
                                </div>
                                <div className='inputItem'>
                                    <label>Onion: 
                                        <input 
                                            name='onion'
                                            type='checkbox'
                                            data-cy='onion'
                                            checked={values.onion}
                                            onChange={onChange}
                                        />
                                    </label>
                                </div>
                                <div className='inputItem'>
                                    <label>Green Pepper: 
                                        <input 
                                            name='greenPepper'
                                            type='checkbox'
                                            data-cy='greenPepper'
                                            checked={values.greenPepper}
                                            onChange={onChange}
                                        />
                                    </label>
                                </div>
                                <div className='inputItem'>
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
                            </div>
                    </Toppings>
                    <div className='inputItem'>
                        <label id='gluten'>Gluten Free Crust: 
                            <input 
                                name='glutenFree'
                                type='checkbox'
                                data-cy='glutenFree'
                                checked={values.glutenFree}
                                onChange={onChange}
                            />
                        </label>
                    </div>
                    <div className='inputItem'>
                        <label>Additional Instructions: </label>
                            <input 
                                name='instructions'
                                type='text'
                                data-cy='instructions'
                                value={values.instructions}
                                onChange={onChange}
                            />
                    </div>
                    <div className='inputButton'>
                        <button disabled={buttonDisabled} data-cy='order'>Order</button>
                    </div>
                </Form>
            </Container>
        </OrderFormPage>
    )
}

export default OrderForm