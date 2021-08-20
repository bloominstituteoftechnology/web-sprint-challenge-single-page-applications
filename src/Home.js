import React from 'react';

export default function Home()
{
    const routeToOrder = () =>
    {

    };

    return (
        <div className='home-wrapper'>
            <img
                className='home-image'
                src='../Assets/Pizza.jpg'
                alt='Pizza'
            />
            <button
                onClick={routeToOrder}
                className='md-button order-button'
            >
                Order a Pizza!
            </button>
        </div>
    );
}