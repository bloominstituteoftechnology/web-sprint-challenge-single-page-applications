import React from 'react';

export default function Order(props)
{
    const {
        values,
        submit,
        change,
        disabled,
        errors,
    } = props;

    const onSubmit = evt =>
    {
        evt.preventDefault();
        submit();
    };

    const onChange = evt =>
    {

        const { name, value, checked, type } = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse);
    };

    return (
        <form className='form container' onSubmit={onSubmit}>
            <div className='form-group submit'>
                <h2>Build Your Own Pizza</h2>

                <button disable={disabled}>submit</button>

                <div className='errors'>
                    <div>{errors.name}</div>
                    <div>{errors.pizzaSize}</div>
                </div>

                <div className='form-group inputs'>
                    <h4>Order Details</h4>

                    <label>Customer Name&nbsp;
                        <input
                            value={values.customerName}
                            onChange={onChange}
                            name='customerName'
                            type='text'
                        />
                    </label>

                    <label>Pizza Size
                        <select
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
                    <label>CanadianBacon
                        <input
                            type="canadianBacon"
                            name="pepperoni"
                            checked={values.canadianBacon}
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



}