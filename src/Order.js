import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Order(props)
{
    const {
        values,
        submit,
        change,
        disabled,
        errors,
    } = props;

    const history = useHistory();

    const onSubmit = (evt) =>
    {
        evt.preventDefault();
        submit();
        history.push("/order/confirmation");
    };

    const onChange = (evt) =>
    {
        const { name, value, checked, type } = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse);
    };

    return (
        <form id='pizza-form' className='form container' onSubmit={onSubmit}>
            <div className='form-group submit'>
                <h2>Build Your Own Pizza</h2>

                <button id='order-button' disable={disabled}>submit</button>

                <div className='errors'>
                    <div>{errors.customerName}</div>
                    <div>{errors.pizzaSize}</div>
                </div>

                <div className='form-group inputs'>
                    <h4>Order Details</h4>

                    <label>Customer Name&nbsp;
                        <input
                            id='name-input'
                            value={values.customerName}
                            onChange={onChange}
                            name='customerName'
                            type='text'
                        />
                    </label>

                    <label>Pizza Size
                        <select
                            id='size-dropdown'
                            onChange={onChange}
                            value={values.pizzaSize}
                            name='pizzaSize'
                        >
                            <option value=''>-- Select a pizza size --</option>
                            <option value='small'>Small</option>
                            <option value='medium'>Medium</option>
                            <option value='large'>Large</option>
                        </select>
                    </label>
                </div>

                <div className='form-group checkboxes'>
                    <h4>Toppings</h4>

                    <label>pepperoni
                        <input
                            type="checkbox"
                            name="pepperoni"
                            checked={values.pepperoni}
                            onChange={onChange}
                        />
                    </label>

                    <label>Sausage
                        <input
                            type="checkbox"
                            name="sausage"
                            checked={values.sausage}
                            onChange={onChange}
                        />
                    </label>
                    <label>Bacon
                        <input
                            type="checkbox"
                            name="bacon"
                            checked={values.bacon}
                            onChange={onChange}
                        />
                    </label>
                    <label>Onion
                        <input
                            type="checkbox"
                            name="onion"
                            checked={values.onion}
                            onChange={onChange}
                        />
                    </label>
                    <label>Tomato
                        <input
                            type="checkbox"
                            name="tomato"
                            checked={values.tomato}
                            onChange={onChange}
                        />
                    </label>
                    <label>Cheese
                        <input
                            type="checkbox"
                            name="cheese"
                            checked={values.cheese}
                            onChange={onChange}
                        />
                    </label>
                </div>

                <div className='form-group inputs'>
                    <label>Special Instructions&nbsp;
                        <input
                            id='special-text'
                            value={values.special}
                            onChange={onChange}
                            name='special'
                            type='text'
                        />
                    </label>

                </div>
            </div>
        </form>
    );
};