import React from 'react';
import "./index.css";
import {Link} from "react-router-dom";
import {Pizza} from "./Pizza";




export default function Home() {
    return(
        <div id="pizzaorder">
        <h1>Lambda Eats</h1>
        <h2> Voted Best Pizza in Town</h2>
     <button id="order-pizza" onClick={() => {
         window.location.href = "/pizza/1";
       
         }}>Get Pizza</button>

        <p>Online ordering now available!</p>
        
          </div>
    )}


