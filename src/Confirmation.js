import React from 'react';

function Confirmation({ details })
{
    if (!details)
    {
        return <h3>Working on your order&apos;s details...</h3>;
    }

    return (
        <div className='confirmation container'>
            <h2>{details.customerName}'s Order Details</h2>
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
        </div>
    );
}

export default Confirmation;