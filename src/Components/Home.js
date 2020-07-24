import React from 'react'
import {Link, Route, Switch} from 'react-router-dom';

export default function Home(){
    return (
        <div className='home-container'>
            <p>Home comp</p>
            <img src='' alt=''/>
            <Link to='/order'>Pizza?</Link>
        </div>
    )    
}