import React from 'react';
import pizzaDog from './Assets/pizzaDog.jpg';

export default function Confirmation({ details })
{
    if (!details)
    {
        return <h3>Loading your order&apos;s details...</h3>;
    }

    return (
        <div className='form-group submit'>
            <h2>{details.customerName}'s Order Details</h2>

            <div className='form-group inputs'>
                <p>Pizza Size: {details.pizzaSize}</p>
                {
                    !!details.toppings && !!details.toppings.length &&
                    <div>
                        Toppings:
                        <ul>
                            {details.toppings.map((item, idx) => <li key={idx}>{item}</li>)}
                        </ul>
                    </div>
                }
                <p>Special Instructions: {details.special}</p>
                <img src={pizzaDog} alt="pizza dog" />
            </div>
        </div>
    );
};