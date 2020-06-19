import React from 'react';
import { Route, Link, Switch, NavLink } from "react-router-dom";

export default function Home(){


    return(

        <div className="bottom">
      <header>
      <h1 className="favoriteFood">
        Your favorite food<br/> delivered while coding! 🍕🍕
      </h1>

      <Link to="/pizza">
        <button className="homeBtn">Want Pizza? Click Here!</button>
      </Link>
      </header>

        <div className="images">
          <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=714&q=80
" className="img1"></img>
 <img src="https://images.unsplash.com/photo-1559978137-8c560d91e9e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80
" className="img1"></img>
 <img src="https://images.unsplash.com/photo-1527477396000-e27163b481c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1335&q=80
" className="img1"></img></div>

</div>
   

   
    )
}