import React from 'react';
import { Link } from 'react-router-dom';

export default function Home(){
    return(
        <div className='home'>

            <h1>Lambda Eats</h1>

            <p>Pizza delivered hot to your door</p>

            <img 
                src='https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg' 
                alt='' />
            
            <Link 
                to='/form'
                className='orderBtn' >
                Order Now!   
            </Link>

        </div>
    )
}
