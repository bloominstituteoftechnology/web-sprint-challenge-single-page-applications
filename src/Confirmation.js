import React, {useState} from "react";
import "./index.css";
import Home from './Home'
import props from './PizzaForm'
import {Link} from 'react-router-dom'



export default function Confirmation(props) {
    return(
        <div>
               <Link to='/'>Home</Link>
            <h1>Thanks for your order, { props.name} !</h1>
            <h2>Estimated wait time 25 minutes</h2>
            We'll be sure to {props.special}.
        </div>
    )
}