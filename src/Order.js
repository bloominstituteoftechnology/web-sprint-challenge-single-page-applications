import React from 'react'; 

function Order({ details }) {
    return (
        <div className="order-receipt">
            <h4>Thank you for your order</h4>
            <p>{details.name} will be receiving:</p>
            <p>One {details.size} pizza fresh from the oven topped with:</p>

        {
            !!details.toppings && !!details.toppings.length &&
            <div>
                <ul>
                    {details.toppings.map((slct, idx) => <li key={idx}>{slct}</li>)}
                </ul>
            </div>
        }

        </div>
    )
}

export default Order;