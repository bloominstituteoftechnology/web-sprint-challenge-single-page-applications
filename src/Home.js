import React from 'react';
import pizza from './Assets/Pizza.jpg';

export default function Home()
{
    const routeToOrder = () =>
    {

    };

    return (
        <div className='home-wrapper'>
            <img
                className='home-image'
                src={pizza}
                alt='Pizza'
                height='100px'
                width='200px'
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