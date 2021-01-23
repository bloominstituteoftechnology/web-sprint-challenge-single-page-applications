
//import your dependencies & components
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import PizzaForm from './PizzaForm';
//import HomePage from '/HomePage.css';

//In here in the return statement we need to link to the PizzaForm using ReactRouter
export default function HomePage (){   
     return(
        <>
        <div className='Home'>
            <NavLink to={'/'}>
                <h2>Home Page</h2>
            </NavLink>

            <Link to={`/pizza`}>
                <h2>Make Your Pizza</h2>
            </Link>

        </div>

        <div className='restaurant-images'>
            <h4>Food Delivery in Frost Fangs Beyond The Wall</h4>
                <p>Ice On a Plate</p>
                <img src='https://t4.ftcdn.net/jpg/01/93/84/17/360_F_193841721_9qdsnylA23SIVt2sN71FpZMVoc3RfXhe.jpg' alt='Ice on Plate'/>
                <p>Icee Express</p>
                <img src='https://t4.ftcdn.net/jpg/01/93/84/17/360_F_193841721_9qdsnylA23SIVt2sN71FpZMVoc3RfXhe.jpg' alt='Ice on Plate'/>
                <p>Ice-o-Rama</p>
                <img src='https://t4.ftcdn.net/jpg/01/93/84/17/360_F_193841721_9qdsnylA23SIVt2sN71FpZMVoc3RfXhe.jpg' alt='Ice on Plate'/>  
                
        </div>
        </>
    );
}
