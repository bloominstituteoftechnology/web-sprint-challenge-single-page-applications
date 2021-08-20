import React from 'react';
import { Link } from 'react-router-dom';
import pizza from './Assets/Pizza.jpg';

export default function Home()
{
    return (
        <div className='home-wrapper'>
            <img
                className='home-image'
                src={pizza}
                alt='Pizza'
            />
            <Link to="/pizza">
                <button
                    className='md-button order-button'
                >
                    Order a Pizza!
                </button>
            </Link>
        </div>
    );
}