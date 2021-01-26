import React from 'react'


export default function Header() {
    return (
        <>
        <nav>
               <ul>
                   <li><h2><span>Lambda <span className="eats">Eats</span></span></h2></li>
                    <li><input type="text" placeholder="13872 Del Corso Way"></input></li>
                    <li>
                    <input 
                    type="text" 
                    placeholder="What are you craving?">
                    </input>
                    </li>
               </ul>
           </nav>
       <div className = "header">
           <div className="header-text-content">
           <h1>Crave it? Get it. </h1>
           <p>Search for a favorite restaurant, cuisine, <br />
           or dish.
           </p>
           <button>Order Now</button>
           </div>
       </div>
        </>
    )
}

