import React from 'react';
import pizza from './Assets/Pizza.jpg';
import { Link } from 'react-router-dom';

export default function Home()
{

    return (
        <div className='home-wrapper'>
            <img
                className='home-image'
                src={pizza}
                alt='Img of Pizza'
            />
            <Link to="/pizza">
                <button className='md-button pizza-button'>
                    Order Pizza Now!
                </button>
            </Link>
        </div>
    );
};