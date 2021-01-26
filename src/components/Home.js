import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {

    return(
        <div className='homeContainer'>
            <nav>
                <Link to='/'>Home</Link>
            </nav>
            <h1>Lambda Eats</h1>
            <p>Pizza delivered hot to your door</p>
            <img 
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8ye68MxcWs4pHKOnv5Z1AbcIZ_n-C1Z8wtg&usqp=CAU' 
                alt=''
            />
            <Link to='/form'>Order Now!</Link> 
        </div>  
    )
}

