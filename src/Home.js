// import React from 'react';
// import "./index.css";
// import {Link} from "react-router-dom";
// import {Pizza} from "./Pizza";




// export default function Home() {
//     return(
//         <div id="pizzaorder">
//         <h1>Lambda Eats</h1>
//         <h2> Voted Best Pizza in Town</h2>
//      <button id="order-pizza" onClick={() => {
//          window.location.href = "/pizza/1";
       
//          }}>Get Pizza</button>

//         <p>Online ordering now available!</p>
        
//           </div>
//     )}

import { Link, useRouteMatch } from 'react-router-dom'
 import React from 'react';

 export default function Home() {
     const { url } = useRouteMatch()
     return (
         <div className="mainContainer">
             <h1>Picasso Pizza!</h1>
             <h1>Let's make some art!</h1>
             <Link to={`${url}pizza`}><button id="redirect">Become a pizza artist!</button></Link>
         </div>
     );
 };



