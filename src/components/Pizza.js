import React from 'react';
import { Link } from 'react-router-dom';

export default function Pizza() {
    return(
        <div className='pizzaContainer'>

            <h1>Your pizza is on its way!</h1>

            <Link 
                to='/'>
                Go Home
            </Link>

        </div>
    )
}