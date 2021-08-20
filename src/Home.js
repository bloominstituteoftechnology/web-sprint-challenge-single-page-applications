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
                alt='Img of Pizza'
            />
            <button
                onClick={routeToOrder}
                className='md-button shop-button'
            >
                Order Pizza Now!
            </button>
        </div>
    );
};