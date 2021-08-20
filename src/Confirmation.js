import React from 'react';
import pizza1 from './Assets/pizza1.jpg';

function Confirmation({ details })
{
    if (!details)
    {
        return <h3>Working on your order&apos;s details...</h3>;
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
                            {details.toppings.map((topping, idx) => <li key={idx}>{topping}</li>)}
                        </ul>
                    </div>
                }

                <p>Special Instruction: {details.special}</p>
                <img src={pizza1} alt="Dog and cat with Pizza Pic" />
            </div>
        </div>
    );
}

export default Confirmation;