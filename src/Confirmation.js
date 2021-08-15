import React, {useState} from "react";
import "./index.css";
import Home from './Home'
import name from './Pizza'
import {Link} from 'react-router-dom'



export default function Confirmation({name}) {
    return(
        <div>
               <Link to='/'>Home</Link>
            <h1>Thanks for your order, {name} !</h1>
            <h2>Estimated wait time 25 minutes</h2>
        </div>
    )
}